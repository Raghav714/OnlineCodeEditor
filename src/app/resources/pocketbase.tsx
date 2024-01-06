import PocketBase from 'pocketbase';
const NEXT_PUBLIC_POCKETBASE_URL = process.env.NEXT_PUBLIC_POCKETBASE_URL
const pb = new PocketBase(`${NEXT_PUBLIC_POCKETBASE_URL}`);

async function login(email: string, password: string) {
    try {
        const user = await pb.collection('users').authWithPassword(email, password);

        if (!pb.authStore.isValid)
            return null;


        return {
            isValid: true,
            userId: pb.authStore.model?.id,
            defaultLanguage: user.record?.defaultLanguage
        }

    } catch (error) {
        console.error('Error logging in:', error);
        return null;
    }
}

async function requestPasswordChange(email: string) {
    try {
        let result = await pb.collection('users').requestPasswordReset(email);
        return result
    } catch (error) {
        console.error('Error logging in:', error);
        return null;
    }
}

async function createUser(email: string, password: string, passwordConfirm: string) {
    try {
        const user = await pb.collection('users').create({
            "email": email,
            "password": password,
            "passwordConfirm": passwordConfirm,
            "emailVisibility": true,
        });

        return user;
    } catch (error) {
        console.error('Error in creating account', error);
        return null;
    }
}

async function changeDefaultLanguage(defaultLanguage: string) {
    if (!pb.authStore.isValid || !pb.authStore.model)
        return null;

    try {
        await pb.collection('users').update(pb.authStore.model?.id, {
            defaultLanguage: defaultLanguage
        })
    } catch (error) {
        console.error("Error updating default language ", error)
    }
}

async function logout() {
    try {
        pb.authStore.clear();
    } catch (error) {
        console.error('Error logging out', error);
    }
}


async function saveCodeFile(fileId: string, pyCode: string) {
    if (!pb.authStore.isValid)
        return null;
    try {
        const record = await pb.collection('python_files').update(fileId, {
            code: pyCode,
        });
        return record;
    } catch (error) {
        console.error('Error saving file', error);
    }
}

async function getCodeFiles() {
    if (!pb.authStore.isValid || !pb.authStore.model)
        return null;

    try {
        const data = await pb.collection('python_files').getList(1, 50, { filter: `user = '${pb.authStore.model.id}'`, requestKey: null });
        return data?.items as any[];
        // const userRecord = await pb.collection('users').getOne(userId);
        // const fileIds = userRecord.field || [];
        // const filePromises = fileIds.map(async (fileId: string) => {
        //     return await pb.collection('python_files').getOne(fileId);
        // });
        // const files = await Promise.all(filePromises);
        // console.log(files);
        // return files;
    } catch (error) {
        console.error('Error fetching Python files:', error);
        return null;
    }
}

async function addCodeFile(title: string, language: string) {
    if (!pb.authStore.isValid || !pb.authStore.model)
        return null;
    try {
        const record = await pb.collection('python_files').create({
            title: title,
            user: pb.authStore.model.id,
            language: language,
        });
        return record;
    } catch (error) {
        console.error('Error creating new file', error);
        return null
    }
}

async function deleteCodeFile(fileId: string) {
    if (!pb.authStore.isValid) {
        return null;
    }

    try {
        let record = await pb.collection('python_files').delete(fileId);
        return record;
    } catch (error) {
        console.error('Error Deleting File', error);
        return null
    }

}

async function renameCodeFile(fileId: string, newTitle: string) {
    if (!pb.authStore.isValid) {
        return null;
    }

    try {
        let record = await pb.collection('python_files').update(fileId, { title: newTitle });
        return record;
    } catch (error) {
        console.error('Error Renaming File', error);
        return null
    }

}

export {
    login,
    // authLogin,
    requestPasswordChange,
    changeDefaultLanguage,
    createUser,
    logout,
    getCodeFiles,
    saveCodeFile,
    addCodeFile,
    deleteCodeFile,
    renameCodeFile
};
