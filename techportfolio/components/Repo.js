import { Image, Row, Col } from "antd"
import RightSlide from "./RightSlide"
import Slide from "./slide"
import Show from "./show"

const Repo = () =>{
    return(
        <><RightSlide>
            <Row  gutter={20} style={{marginTop:"20px"}}>
                <Col xs={{ span: 22, offset: 1 }} sm={{ span: 20, offset: 2 }} md={{ span: 20, offset: 2 }} lg={{ span: 18, offset: 3 }} xl={{ span: 16, offset: 4 }} style={{display:"flex", justifyContent:"space-around"}}>
                    <Row gutter={[20, 20]}>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{display:"flex", flexDirection:"row", justifyContent:"end"}}>
                            <Image className="repo" preview={false} width={500} src="https://github-readme-stats.vercel.app/api/pin/?username=shiv1119&repo=BloggingWebsite">
                            </Image>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{display:"flex"}}>
                            <Image className="repo" preview={false} width={500} src="https://github-readme-stats.vercel.app/api/pin/?username=shiv1119&repo=BloggingWebsite">
                            </Image>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </RightSlide>
            <Slide>
            <Row  gutter={20} style={{marginTop:"20px"}}>
                <Col xs={{ span: 22, offset: 1 }} sm={{ span: 20, offset: 2 }} md={{ span: 20, offset: 2 }} lg={{ span: 18, offset: 3 }} xl={{ span: 16, offset: 4 }} style={{display:"flex", justifyContent:"space-around"}}>
                    <Row gutter={[20, 20]}>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{display:"flex", flexDirection:"row", justifyContent:"end"}}>
                            <Image className="repo" preview={false} width={500} src="https://github-readme-stats.vercel.app/api/pin/?username=shiv1119&repo=BloggingWebsite">
                            </Image>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{display:"flex"}}>
                            <Image className="repo" preview={false} width={500} src="https://github-readme-stats.vercel.app/api/pin/?username=shiv1119&repo=BloggingWebsite">
                            </Image>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </Slide>
            <Show>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{display:"flex", justifyContent: "center", marginTop:"25px"}}>
                    <a className="git_link small_text" href="https://github.com/shiv1119?tab=repositories"><Show delay={0.2}>Click For More</Show></a>
                </Col>
            </Row>
            </Show>
        </>
    )
}

export default Repo;