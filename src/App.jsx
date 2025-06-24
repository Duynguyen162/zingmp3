import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes/route';
import DefaultLayout from './layout/DefaultLayout/DefaultLayout';
export default function App() {
    return (
        <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <DefaultLayout>
                                            <Page />
                                        </DefaultLayout>
                                    }
                                >
                                    {/* childern cấp 2 */}
                                    {route.children &&
                                        route.children.map((child, childIndex) => {
                                            const ChildPage = child.component;
                                            return (
                                                <Route key={childIndex} path={child.path} element={<ChildPage />}>
                                                    {/* children cấp 3 */}
                                                    {child.children &&
                                                        child.children.map((subChild, subChildIndex) => {
                                                            const SubChildPage = subChild.component;
                                                            return (
                                                                <Route
                                                                    key={subChildIndex}
                                                                    path={subChild.path}
                                                                    element={<SubChildPage />}
                                                                />
                                                            );
                                                        })}
                                                </Route>
                                            );
                                        })}
                                </Route>
                            );
                        })}
                    </Routes>
                </div>
        </Router>
    );
}
