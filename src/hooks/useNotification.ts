import { TypeEnum } from "./useType";

let permission = ''

export function requestPermission() {
    Notification.requestPermission(function (status) {
        permission = status
    });
}

export function createNotification(type: TypeEnum) {
    const message = `时间到，该${type === TypeEnum.Work ? '休息' : '工作'}了！`
    if (permission === 'granted') {
        const n = new Notification(message)
        n.onshow = function () {
            setTimeout(n.close.bind(n), 5000);
        }
    } else {
        alert(message)
    }
}