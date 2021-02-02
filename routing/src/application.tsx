import React, { FC } from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Link, Route, Switch, useParams } from 'react-router-dom';
import Overview from './pages/Overview';

interface typeUsers {
    id: number;
    name: string;
}

interface typeUserId {
    userId: string;
}

const users: typeUsers[] = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' }
];

const Users = () => (
    <div>
        {users.map((user) => (
            <div key={user.id}>
                <Link to={`/${user.id}`}>{user.name}</Link>
            </div>
        ))}
    </div>
);

const User = () => {
    const params: typeUserId = useParams();
    // console.log เพื่อดูชนิดและรูปแบบข้อมูล
    console.log(params);

    //FIXME: const [currentUser, setUser] = useState({});

    //FIXME: useEffect(() => {
    //FIXME:     const getUser = async () => {
    //FIXME:         const user = await axios;

    //FIXME:         setUser({ ...currentUser, ...user });
    //FIXME:     };
    //FIXME: }, []);

    //FIXME: return <div>'s Dashboard' Page</div>

    return <div>{users[+params.userId - 1].name} 's Dashboard' Page</div>;
};

const Application: FC = () => {
    return (
        <Router>
            <Sidebar />
            <Switch>
                <Route path="/overview" exact>
                    {/* exact={true} แปลว่า แน่นอน ใช้เป็นให้แสดง path /overview อย่างเดียวไม่แสดง path อื่นๆ */}
                    <Overview />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/:userId">
                    <User />
                </Route>
            </Switch>
        </Router>
    );
};

export default Application;
