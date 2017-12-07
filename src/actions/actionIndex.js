export function selectLibrary( libraryId ) {
    return {
        type: 'select_library',
        payload: libraryId
    }
};