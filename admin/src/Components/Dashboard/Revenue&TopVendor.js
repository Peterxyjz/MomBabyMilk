
import { Col, Row } from "reactstrap"
import DashboardWrapper from "./DashboardWrapper"
import DashboardChart from "./DashboardChart"

const RevenueAndTopVendor = () => {
    return (
        <Row className="dashboard-form theme-form">
            <Col >
                <DashboardWrapper classes={{ colProps: { sm: 12 }, title: "AverageRevenue" }}>
                    <DashboardChart />
                </DashboardWrapper>
            </Col>

        </Row >
    )
}

export default RevenueAndTopVendor