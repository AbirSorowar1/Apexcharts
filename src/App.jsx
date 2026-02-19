import { Layout, Card, Statistic } from 'antd';
import {
  DashboardOutlined,
  LineChartOutlined,
  BarChartOutlined,
  PieChartOutlined,
  RiseOutlined,
  FallOutlined,
  AreaChartOutlined,
  RocketOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import SalesLineChart from './components/SalesLineChart';
import RevenueBarChart from './components/RevenueBarChart';
import CategoryPieChart from './components/CategoryPieChart';
import AreaChart from './components/AreaChart';
import RadialProgress from './components/RadialProgress';

const { Header, Sider, Content } = Layout;

function App() {
  const [selectedKey, setSelectedKey] = useState('1');

  return (
    <Layout className="min-h-screen">
      <Header className="bg-white dark:bg-gray-900 border-b px-6 flex items-center justify-between shadow-sm">
        <div className="text-2xl font-bold text-white">Dashboard</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
        </div>
      </Header>

      <Layout>
        <Sider width={220} className="bg-white dark:bg-gray-900 shadow-md">
          <Sidebar selectedKey={selectedKey} onSelect={setSelectedKey} />
        </Sider>

        <Content className="p-6 overflow-auto">
          {/* KPI Cards - always visible for now */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <Statistic
                title="Total Revenue"
                value={458920}
                precision={2}
                valueStyle={{ color: '#3b82f6' }}
                prefix={<RiseOutlined />}
                suffix="৳"
              />
            </Card>
            {/* ... other 3 cards same as before ... */}
          </div>

          {/* Conditional chart sections based on selected menu */}
          <div className="space-y-8">
            {selectedKey === '1' && (
              <>
                <Card title="Overview Charts" className="shadow-md">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <SalesLineChart />
                    <RevenueBarChart />
                  </div>
                </Card>
                <Card title="Quick Stats" className="shadow-md">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <RadialProgress value={76} label="Sales Target" color="#3b82f6" />
                    <RadialProgress value={92} label="Support Tickets" color="#10b981" />
                    <RadialProgress value={45} label="New Leads" color="#f59e0b" />
                  </div>
                </Card>
              </>
            )}

            {selectedKey === '2' && (
              <Card title="Sales Analytics" className="shadow-md">
                <SalesLineChart />
              </Card>
            )}

            {selectedKey === '3' && (
              <Card title="Revenue Breakdown" className="shadow-md">
                <RevenueBarChart />
              </Card>
            )}

            {selectedKey === '4' && (
              <Card title="Product Categories" className="shadow-md">
                <CategoryPieChart />
              </Card>
            )}

            {selectedKey === '5' && (
              <Card title="User Growth Trends" className="shadow-md">
                <AreaChart />
              </Card>
            )}

            {selectedKey === '6' && (
              <Card title="Performance Overview" className="shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                  <RadialProgress value={76} label="Sales Target" color="#3b82f6" />
                  <RadialProgress value={92} label="Support Tickets" color="#10b981" />
                  <RadialProgress value={45} label="New Leads" color="#f59e0b" />
                </div>
              </Card>
            )}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;