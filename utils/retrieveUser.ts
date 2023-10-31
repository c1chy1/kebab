export const retrieveUser = async (token: string) => {



    const { data: response, error } = await useFetch(`/api/user`, {
        method: 'POST',
        headers: { token: `${token}` }
    })

    console.log(response)
    console.log(error)

    return error.value ? console.error(error.value.data) : response.value
}