import React from "react";
import Notification from "./Notification";
const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 주식 변동에 대해 알려드립니다.",
    },
    {
        id: 2,
        message: "KOSPI는 15.53로 0.62%로떨여졌습니다다."
    },
    {
        id: 3,
        message: "KOSDAQ는 6.60으로0.95%로떨어졌습니다.",
    },
];
var timer;
class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
        };
    }
    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }
    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }
    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification
                            key={notification.id}
                            id={notification.id}
                            message={notification.message}
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;