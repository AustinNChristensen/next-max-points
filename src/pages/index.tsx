import { HomePage } from '../components/HomePage/HomePage';
import { DashboardLayout } from '../components/layouts/dashboard/DashboardLayout';

interface Props { }

const Dashboard = (props: Props) => {
    return (
        <DashboardLayout isHomePage={true}>
            <HomePage {...props} />
        </DashboardLayout>
    );
};

export default Dashboard;