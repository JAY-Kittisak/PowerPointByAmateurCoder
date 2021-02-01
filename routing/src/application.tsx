import React, { FC } from 'react'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Overview from './pages/Overview'

const Application: FC = () => {
    return (
        <Router>
            <Sidebar />
            <Switch>
                <Route path="/overview" exact>
                    {/* exact={true} แปลว่า แน่นอน ใช้เป็นให้แสดง path /overview อย่างเดียวไม่แสดง path อื่นๆ */}
                    <Overview />
                </Route>
            </Switch>
        </Router>

    )
}

export default Application