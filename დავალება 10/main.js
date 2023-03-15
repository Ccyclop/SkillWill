// I

const myTimeout = (time) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done')
            reject('ooops')
        }, time)
    })
    return promise
}

myTimeout(4000)
    .then(txt => console.log(txt))
    .catch(err => console.log(err))




// II


// getFacebookProfile(1, (profile) => {
    //     getFacebookProfile(profile.friends[0].id, (friendProfile) => {
        //         getFacebookProfile(friendProfile.friends[0].id, (friendsFriend) =>{
            //             getFacebookProfile(friendsFriend.friends[0].id, (finalProfile) => {
                //                 console.log('Finally, I have all the profiles')
//             })
//         })
//     })
// })


// const getFacebookProfile = (id) => {
//     const promise = new Promise((resolve, reject) => {
//         resolve('yea')
//         reject('no')
//     })

//     return promise
// }

// getFacebookProfile(1)
//     .then(() => getFacebookProfile(profile.friends[0].id))
//     .then(() => getFacebookProfile(friendProfile.friends[0].id))
//     .then(() => getFacebookProfile(friendsFriend.friends[0].id))
//     .then(() => console.log('Finally, I have all the profiles'))
//     .catch(() => console.log('Something, went wrong'))


// async function getFacebookProfile(id) {
//     try{
//         await getFacebookProfile(1)
//         await getFacebookProfile(profile.friends[0].id)
//         await getFacebookProfile(friendProfile.friends[0].id)
//         await getFacebookProfile(friendsFriend.friends[0].id)
//     } catch(err) {
//         console.log('Something, went wrong')
//     }
// }


