import firebase from 'firebase';

export function getUserData(userId) {
    return firebase.database().ref('Users/'+userId).once('value');
}

export function getServerTime() {
    return firebase.database.ServerValue.TIMESTAMP;
}

export function getUsers() {
    return firebase.database().ref('Users').once('value')
}

export async function getLastMessages(coachId) {
    let users = await getUsers();

    let messagePaths = [], usersArr = []

    users.forEach(user => {
        user = user.val();
        usersArr.push(user);
        messagePaths.push(
            'Messages/'+user.id+'-'+coachId
        )
    });

    let lastRealMessages = [];
    let allPromises = [];
    messagePaths.map((path, i) => {
        allPromises.push(firebase.database().ref(path).limitToLast(1).once('value'));
    });
    await Promise.all(allPromises).then(res => {
        res.map((item, i) => {
            let valCheck = item.val();
            if(valCheck === null){
                lastRealMessages.push({
                    id: i,
                    name: usersArr[i] ? usersArr[i].name : '',
                    lastMessage: '',
                    lastMessageDate: '',
                    createdAt: '',
                    path: messagePaths[i]
                })
            }
            else {
                item.forEach(messageData => {
                    messageData = messageData.val();
                    lastRealMessages.push({
                        id: i,
                        name: usersArr[i] ? usersArr[i].name : '',
                        lastMessage: messageData.image ? '-Resim-' : messageData.text,
                        lastMessageDate: getLastMessageDate(messageData.createdAt),
                        createdAt: messageData.createdAt,
                        path: messagePaths[i]
                    })
                })
            }
        })
    });

    return lastRealMessages;
}

function getLastMessageDate(date) {
    date = new Date(date);
    let now = new Date();
    let diff = date.getTimezoneOffset();
    // date.setMinutes(date.getMinutes() + diff);

    if(date.getDate() == now.getDate() && date.getMonth() == now.getMonth() && date.getFullYear() == now.getFullYear()){
        let hours = date.getHours();
        hours = hours < 10 ? '0'+hours : hours;
        let minutes = date.getMinutes();
        minutes = minutes < 10 ? '0'+minutes : minutes;
        return hours+':'+minutes;
    }

    let months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    let day = date.getDate();
    let month = date.getMonth();
    return day + ' ' + months[month]
}

export function generateRandomID(length = 8) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

