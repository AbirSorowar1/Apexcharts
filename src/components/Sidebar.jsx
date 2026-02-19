import { Menu } from 'antd';
import {
    DashboardOutlined,
    LineChartOutlined,
    BarChartOutlined,
    PieChartOutlined,
    AreaChartOutlined,
    RocketOutlined,
} from '@ant-design/icons';

function Sidebar({ selectedKey, onSelect }) {
    return (
        <Menu
            mode="inline"
            selectedKeys={[selectedKey]}           // ← controlled
            onClick={({ key }) => onSelect(key)}   // ← update parent state
            className="h-full border-r-0 pt-4 dark:bg-gray-900"
            theme="light"
        >
            <Menu.Item key="1" icon={<DashboardOutlined />}>
                Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<LineChartOutlined />}>
                Sales Analytics
            </Menu.Item>
            <Menu.Item key="3" icon={<BarChartOutlined />}>
                Revenue Breakdown
            </Menu.Item>
            <Menu.Item key="4" icon={<PieChartOutlined />}>
                Categories
            </Menu.Item>
            <Menu.Item key="5" icon={<AreaChartOutlined />}>
                Growth Trends
            </Menu.Item>
            <Menu.Item key="6" icon={<RocketOutlined />}>
                Performance
            </Menu.Item>
        </Menu>
    );
}

export default Sidebar;