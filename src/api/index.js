import instance from "../utils/ApiInstance";


export async function setUserAddress(location) {
    try {
        const response = await instance({
            method: 'GET',
            url:'https://randomuser.me/api/?results=20' ,
        });
         
          const data = {
                ...response,
                results:response.results.filter((obj, pos, arr) => {
                    return arr
                      .map(mapObj => mapObj.cell)
                      .indexOf(obj.cell) === pos;
                  })
          }
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error);
    }
}
