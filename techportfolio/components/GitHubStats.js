import {Image, Col,Row, Card} from "antd";
import Show from "./show";
const GitHubStats = () =>{
    return(
        <Show delay={0.2}>
            <Row style={{marginBottom:"20px"}}>
                <Col xs={{ span: 22, offset: 1 }} sm={{ span: 20, offset: 2 }} md={{ span: 20, offset: 2 }} lg={{ span: 18, offset: 3 }} xl={{ span: 16, offset: 4 }}>
                    <div style={{fontWeight:"bold", paddingBottom:"30px"}} className="large_text">Github Stats</div>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="col-style">
                            <Image preview={false} width={1015}
                                className="repo"
                                style={{background:"white", border:"1px solid #e3e1e1"}}
                                src="https://raw.githubusercontent.com/shiv1119/shiv1119/output/snake.svg"
                            ></Image>

                        </Col>
                        
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="col-style">
                            <Image preview={false}
                                className="repo"
                                width={1015}
                                src="https://github-readme-stats.vercel.app/api?username=shiv1119&show_icons=true&theme=white&card_width=800&title_color=191a19"
                            ></Image>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="col-style">

                            <Image preview={false}
                                className="repo"
                                width={1015}
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=shiv1119&layout=compact&langs_count=8&card_width=800&title_color=191a19"
                            ></Image>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Show>
    );
}

export default GitHubStats;