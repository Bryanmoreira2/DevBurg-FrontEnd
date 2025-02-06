import { Outlet, Navigate } from "react-router-dom";
import { SideNavAdmin } from "../../components";
import {Containers} from './styles'

export function AdiminLayout() {

    const { admin: isAdmin } = JSON.parse(
        localStorage.getItem('devburg:userData')
    )

    return isAdmin ?
        (
            <Containers>
                <SideNavAdmin />
                <main>
                    <section>
                        <Outlet />
                    </section>
                </main>

            </Containers>
        ) : <Navigate to="/login" />;
}