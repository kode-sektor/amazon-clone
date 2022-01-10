import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillCaretDown, AiOutlineSearch, AiOutlineDoubleRight } from 'react-icons/ai'
import { Row, Col } from 'reactstrap'
import Popover from '../../components/UI/Popover'

import { BiMenu } from 'react-icons/bi'
import { AiOutlineTwitter, AiOutlineMail } from 'react-icons/ai'
import { FaDesktop, FaPodcast, FaTwitch } from 'react-icons/fa'
import { IoMdFilm } from 'react-icons/io'
import { BiBuildings, BiLinkExternal } from 'react-icons/bi'
import { MdLabelOutline } from 'react-icons/md'
import { RiFileSearchLine, RiPlayCircleLine } from 'react-icons/ri'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { BiBookmarkPlus } from 'react-icons/bi'
import { TiSocialYoutubeCircular } from 'react-icons/ti'
import { FaFacebookF } from 'react-icons/fa'

import aws_poster_vid from '../../images/aws-poster-vid.png'
import placeholder_agility from '../../images/placeholder-agility.png'
import placeholder_flexibility from '../../images/placeholder-flexibility.png'
import video_placeholder_cost_savings from '../../images/video-placeholder-cost-savings.png'
import video_placeholder_global from '../../images/video-placeholder-global.png'
import aws_types_of_cloud_computing_infrastructure from '../../images/aws-types-of-cloud-computing-infrastructure.png'
import aws_types_of_cloud_computing_platform from '../../images/aws-types-of-cloud-computing-platform.png'
import aws_types_of_cloud_computing_software from '../../images/aws-types-of-cloud-computing-software.png'
import siemens_logo from '../../images/siemens-logo.png'
import web_services_cloud_computing from '../../images/web-services-cloud-computing.png'

import './index.css'

const AmazonWebServices = () => {

    return (
        <section className="webServices--page">
            <header className="webServices__header">
                <section className="webServices__headWrap">
                    <nav>
                        <section className="d-flex">
                            <div className="webServices__logo">
                                <Link to="/">
                                    <span>Click here to return to Amazon Web Services homepage</span>
                                </Link>
                            </div>
                            <ul className="webServices__navLinks">
                                <li>
                                    <Link to="/">Contact Us</Link>
                                </li>
                                <li className="webServices__navDropdown">
                                    <Popover 
                                        trigger={
                                            <Link to="/" className="">
                                                Support&nbsp;
                                                <AiFillCaretDown />
                                            </Link>
                                        }
                                        dropdown={
                                            <ul>
                                                <li>
                                                    <Link to="/">Support center</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Knowledge center</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">AWS Support overview</Link>
                                                </li>
                                            </ul>
                                        }
                                    />
                                </li>
                                <li className="webServices__navDropdown">
                                    <Popover 
                                        trigger={
                                            <Link to="/">
                                                English&nbsp;
                                                <AiFillCaretDown />
                                            </Link>
                                        }
                                        dropdown={
                                            <section className="webServices__navDual">
                                                <ul className=""> 
                                                    <li>
                                                        <Link to="/">عربي</Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="/">Bahasa Indonesia</Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="/">Deutsch</Link>
                                                    </li> 
                                                    
                                                    <li>
                                                        <Link to="/">Español</Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="/">Français</Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="/">Italiano</Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="/">Português</Link>
                                                    </li> 
                                                </ul> 
                                                <ul className=""> 
                                                    <li>
                                                        <Link to="/">Tiếng Việt</Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="/">Türkçe</Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="/">Ρусский</Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="/">ไทย</Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="/">日本語</Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="/">한국어</Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="/">中文 (简体)</Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="/">中文 (繁體)</Link>
                                                    </li> 
                                                </ul>
                                            </section>                                   
                                        }
                                    />
                                </li>
                                <li className="webServices__navDropdown">
                                    <Popover 
                                        trigger={
                                            <Link to="/">
                                                My Account&nbsp;
                                                <AiFillCaretDown />
                                            </Link>
                                        }
                                        dropdown={
                                            <ul>
                                                <li>
                                                    <Link to="/">AWS Management Console</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Account Settings</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Billing &amp; Cost Management</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Security Credentials</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">AWS Personal Health Dashboard</Link>
                                                </li>
                                            </ul>
                                        }
                                    />
                                </li>
                                <li>
                                    <Link to="/">Sign in</Link>
                                </li>
                                <li className="webServices__navAccount">
                                    <Link className="webServices__account">
                                        <span>Create an AWS account</span>
                                    </Link>
                                </li>
                            </ul>
                        </section>
                        <section className="webServices__primaryNav">
                            <ul>
                                <li>
                                    <Link to="/">
                                        re:Invent
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Solutions
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Documentation
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Learn
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Partner Network
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        AWS Marketplace
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Customer Enablement
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Events
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Explore More
                                    </Link>
                                </li>
                                <li className="ml-3">
                                    <button className="webServices__search">
                                        <AiOutlineSearch />
                                    </button>
                                </li>
                            </ul>
                        </section>
                    </nav>
                </section>
            </header>
            <main className="webServices__main">
                <section className="webServices__cc">
                    <section className="webServices__ccContainer">
                        <section>
                            <section className="webService__desc">
                                <h1 className="webService__descHeading">
                                    What is cloud computing?
                                </h1>
                                <section className="webService__descText">
                                    <p>
                                        Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider like Amazon Web Services (AWS).
                                    </p>
                                    <br />
                                </section>
                                <Link className="webServices__account">
                                    <span>Create an AWS account</span>
                                </Link>
                            </section>
                            <section className="webService__descImg">
                                <section>
                                    <img src={aws_poster_vid} alt="aws poster video" />
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
                <section className="webServices__pane">
                    <article className="webServices__container text-center">
                        <section>
                            <h1 className="webServices__paneTitle">Who is using cloud computing?</h1>
                            <p className="webServices__usersText">
                                Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider like Amazon Web Services (AWS).
                            </p>
                        </section>
                    </article>
                </section>
                <section className="webServices__pane">
                    <article className="webServices__container text-center">
                        <section className="webServices__benefits">
                            <h1 className="webServices__paneTitle">Benefits of cloud computing</h1>
                            <section className="webServices__bgPatternTop"></section>
                            <section className="webServices__illustration d-flex justify-content-between">
                                <section className="webServices__illustrator">
                                    <figure>
                                        <img src={placeholder_agility} alt="placeholder agility" />
                                    </figure>
                                </section>
                                <section className="webServices__benefitTxt text-left">
                                    <h2 className="websServices__benefitTitle">
                                        Agility
                                    </h2>
                                    <section className="webServices__benefitPara">
                                        <p>
                                            The cloud gives you easy access to a broad range of technologies so that you can innovate faster and build nearly anything that you can imagine. You can quickly spin up resources as you need them–from infrastructure services, such as compute, storage, and databases, to Internet of Things, machine learning, data lakes and analytics, and much more.
                                        </p>
                                        <p>
                                            You can deploy technology services in a matter of minutes, and get from idea to implementation several orders of magnitude faster than before. This gives you the freedom to experiment, test new ideas to differentiate customer experiences, and transform your business.<br />
                                        </p>
                                    </section>
                                </section>
                            </section>
                            <section className="webServices__bgPattern"></section>
                        </section>
                    </article>
                </section>
                <section className="webServices__pane">
                    <article className="webServices__container">
                        <section className="webServices__benefits">
                            <section className="webServices__illustration d-flex justify-content-between">
                                <section className="webServices__benefitTxt text-left">
                                    <h2 className="websServices__benefitTitle">
                                        Elasticity
                                    </h2>
                                    <section className="webServices__benefitPara">
                                        <p>
                                            TWith cloud computing, you don’t have to over-provision resources up front to handle peak levels of business activity in the future. Instead, you provision the amount of resources that you actually need. You can scale these resources up or down to instantly grow and shrink capacity as your business needs change.
                                        </p>
                                    </section>
                                </section>
                                <section className="webServices__illustrator webServices__illustrator--secondary text-center">
                                    <figure>
                                        <img src={placeholder_flexibility} alt="placeholder flexibility" />
                                    </figure>
                                </section>
                            </section>
                        </section>
                    </article>
                </section>
                <section className="webServices__pane">
                    <article className="webServices__container text-center">
                        <section className="webServices__benefits">
                            <section className="webServices__bgPatternTop"></section>
                            <section className="webServices__illustration d-flex justify-content-between align-items-center">
                                <section className="webServices__illustrator">
                                    <figure>
                                        <img src={video_placeholder_cost_savings} alt="video placeholder cost savings" />
                                    </figure>
                                </section>
                                <section className="webServices__benefitTxt text-left">
                                    <h2 className="websServices__benefitTitle">
                                        Cost savings
                                    </h2>
                                    <section className="webServices__benefitPara">
                                        <p>
                                            The cloud allows you to trade capital expenses (such as data centers and physical servers) for variable expenses, and only pay for IT as you consume it. Plus, the variable expenses are much lower than what you would pay to do it yourself because of the economies of scale. 
                                        </p>
                                    </section>
                                </section>
                            </section>
                            <section className="webServices__bgPattern"></section>
                        </section>
                    </article>
                </section>
                <section className="webServices__pane">
                    <article className="webServices__container">
                        <section className="webServices__benefits">
                            <section className="webServices__illustration d-flex justify-content-between">
                                <section className="webServices__benefitTxt text-left">
                                    <h2 className="websServices__benefitTitle">
                                        Deploy globally in minutes
                                    </h2>
                                    <section className="webServices__benefitPara">
                                        <p>
                                            With the cloud, you can expand to new geographic regions and deploy globally in minutes. For example, AWS has infrastructure all over the world, so you can deploy your application in multiple physical locations with just a few clicks. Putting applications in closer proximity to end users reduces latency and improves their experience.
                                        </p>
                                    </section>
                                </section>
                                <section className="webServices__illustrator webServices__illustrator--secondary text-center">
                                    <figure>
                                        <img src={video_placeholder_global} alt="video placeholder global" />
                                    </figure>
                                </section>
                            </section>
                        </section>
                    </article>
                </section>
                <section className="webServices__pane webServices__pane--list">
                    <section className="webServices__container text-center">
                        <section className="webServices__benefits">
                            <section className="webServices__bgPatternTop"></section>
                            <h1 className="webServices__paneTitle webServices__paneTitle--list">Types of cloud computing</h1>
                            <article className="webServices__illustration">
                                <p>
                                    The three main types of cloud computing include Infrastructure as a Service, Platform as a Service, and Software as a Service. Each type of cloud computing provides different levels of control, flexibility, and management so that you can select the right set of services for your needs.
                                </p>  
                                <p>
                                    <small>
                                        <Link to="/">Learn more <AiOutlineDoubleRight/></Link>
                                    </small>
                                </p>
                            </article>
                            <article className="webServices__illustration d-flex">
                                <Row>
                                    <Col xs="3">
                                        <figure>
                                            <img src={aws_types_of_cloud_computing_infrastructure} alt="aws types of cloud computing infrastructure" />
                                        </figure>
                                    </Col>
                                    <Col xs="9">
                                        <h2 className="websServices__benefitTitle">Deploy globally in minutes</h2>
                                        <section className="webServices__benefitPara">
                                            <p>
                                                With the cloud, you can expand to new geographic regions and deploy globally in minutes. For example, AWS has infrastructure all over the world, so you can deploy your application in multiple physical locations with just a few clicks. Putting applications in closer proximity to end users reduces latency and improves their experience.
                                            </p>
                                        </section>
                                    </Col>
                                </Row>
                            </article>
                            <article className="webServices__illustration d-flex">
                                <Row>
                                    <Col xs="3">
                                        <figure>
                                            <img src={aws_types_of_cloud_computing_platform} alt="aws types of cloud computing platform.png" />
                                        </figure>
                                    </Col>
                                    <Col xs="9">
                                        <h2 className="websServices__benefitTitle">
                                            Platform as a Service (PaaS)
                                        </h2>
                                        <section className="webServices__benefitPara">
                                            <p>
                                                PaaS removes the need for you to manage underlying infrastructure (usually hardware and operating systems), and allows you to focus on the deployment and management of your applications. This helps you be more efficient as you don’t need to worry about resource procurement, capacity planning, software maintenance, patching, or any of the other undifferentiated heavy lifting involved in running your application.
                                            </p>
                                        </section>
                                    </Col>
                                </Row>
                            </article>
                            <article className="webServices__illustration d-flex">
                                <Row>
                                    <Col xs="3">
                                        <figure>
                                            <img src={aws_types_of_cloud_computing_software} alt="aws types of cloud computing software.png" />
                                        </figure>
                                    </Col>
                                    <Col xs="9">
                                        <h2 className="websServices__benefitTitle">
                                            Software as a Service (SaaS)
                                        </h2>
                                        <section className="webServices__benefitPara">
                                            <p>
                                                SaaS provides you with a complete product that is run and managed by the service provider. In most cases, people referring to SaaS are referring to end-user applications (such as web-based email). With a SaaS offering, you don’t have to think about how the service is maintained or how the underlying infrastructure is managed. You only need to think about how you will use that particular software.
                                            </p>
                                        </section>
                                    </Col>
                                </Row>
                            </article>
                            <section className="webServices__bgPattern"></section>
                        </section>
                    </section>
                </section>
                <section className="webServices__service">
                    <h1 className="webServices__serviceTitle">
                        Helping customers innovate faster
                    </h1>
                    <section className="webServices__serviceContainer">
                        <nav className="webServices__serviceNav">
                            <ul>
                                <li className="active">
                                    Manufacturing
                                </li>
                                <li>
                                    Financial Services
                                </li>
                                <li>
                                    Fitness
                                </li>
                                <li>
                                    Real Estate
                                </li>
                                <li>
                                    Healthcare
                                </li>
                                <li>
                                    Gaming
                                </li>
                                <li>
                                    Media &amp; Entertainment
                                </li>
                            </ul>
                        </nav>
                        <section className="webServices__hero">
                            <div className="webServices__container">
                                <section className="col-6">
                                    <figure>
                                        <img src={siemens_logo} alt="siemens logo" />
                                    </figure>
                                    <h2>
                                        Siemens Innovates in Energy, Healthcare, and Manufacturing Using AWS
                                    </h2>
                                    <p>
                                        Learn how Siemens used AWS to adapt its culture, encourage innovation, and drive results for its business.
                                    </p>
                                    <Link to="/" className="webServices__serviceLearn">
                                        Learn More <AiOutlineDoubleRight />
                                    </Link>
                                </section>
                            </div>
                        </section>
                        <section className="webServices__pros">
                            <section className="webServices__container">
                                <section>
                                    <section className="webServices__pro">
                                        <img src={web_services_cloud_computing} alt="web services cloud computing" />
                                    </section>
                                    <ul className="webServices__proText">
                                        <li>
                                            <h4 className="webServices__proHeading text-center">
                                                Pioneering Across Industries
                                            </h4>
                                            <p className="text-center">
                                                Siemens is a more than 170-year-old company that started with an idea for improving the telegraph machine. Since its founding, the company has become a transformational leader across the energy, healthcare, and manufacturing industries. <br />
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className="webServices__proHeading text-center">
                                                Democratizing Innovation
                                            </h4>
                                            <p className="text-center">
                                                Siemens encourages a culture of experimentation to discover new business opportunities and realize untapped customer value. The company uses AWS to adopt more agile development processes, including decentralized development teams, democratized data, and startup-like working methods. <br />
                                            </p>

                                        </li>
                                        <li>
                                            <h4 className="webServices__proHeading text-center">
                                                Continuing a Tradition of Transformation
                                            </h4>
                                            <p className="text-center">
                                                Siemens’ cultural transformation has delivered business results. These include bringing industrial IOT to railways and factories, developing intelligent building infrastructure, and using machine learning in its cybersecurity platform. <br />
                                            </p>

                                        </li>
                                    </ul>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
                <section className="webServices__pane">
                    <article className="webServices__container text-center">
                        <section className="webServices__benefits">
                            <section className="webServices__bgPatternTop"></section>
                            <section className="webServices__illustration d-flex justify-content-between align-items-center">
                                <section class="webServices__benefitTxt text-left w-50">
                                    <h2 class="webServices__benefitTitle">Cloud services</h2>
                                    <section class="webServices__benefitPara">
                                        <p>
                                            AWS has more services, and more features within those services, than any other cloud provider, including compute, storage, databases, networking, data lakes and analytics, machine learning and artificial intelligence, IoT, security, and much more.
                                        </p>
                                    </section>
                                    <p className="webServices__learnMore">
                                        <Link to="/">Learn more <AiOutlineDoubleRight/></Link>
                                    </p>
                                </section>
                                <section class="webServices__benefitTxt text-left w-50">
                                    <h2 class="webServices__benefitTitle">Cloud solutions</h2>
                                    <section class="webServices__benefitPara">
                                        <p>
                                            AWS provides a comprehensive portfolio of solutions that help you solve common problems and build faster using the AWS platform. Every AWS Solution comes with detailed architecture, a deployment guide, and instructions for both automated and manual deployment.
                                        </p>
                                    </section>
                                    <p className="webServices__learnMore">
                                        <Link to="/">Learn more <AiOutlineDoubleRight/></Link>
                                    </p>
                                </section>
                            </section>
                            <section class="webServices__bgPattern"></section>
                        </section>
                    </article>
                </section>
                <section className="webServices__pane webServices__pane--list">
                    <section className="webServices__container text-center">
                        <section className="webServices__benefits">
                            <h1 className="webServices__paneTitle webServices__paneTitle--sec">
                                Learn more about cloud computing on AWS
                            </h1>
                            <section className="webServices__cloudComputing row">
                                <Col xs="4">
                                    <section className="webServices__cloudCompute">
                                        <h3 className="webServices__ccHeading">Pricing</h3>
                                        <section className="webServices__benefitPara">
                                            <p>
                                                AWS offers a pay-as-you-go approach for pricing. <br /> 
                                                Pricing for each service is unique. <br />
                                            </p>
                                            <p className="webServices__learnMore">
                                                <Link to="/">Learn more <AiOutlineDoubleRight/></Link>
                                            </p>
                                        </section>
                                    </section>
                                </Col>
                                <Col xs="4">
                                    <section className="webServices__cloudCompute">
                                        <h3 className="webServices__ccHeading">Products</h3>
                                        <section className="webServices__benefitPara">
                                            <p>
                                                AWS has over 175 fully featured services for a wide range of technologies, industries, and use cases. <br />
                                            </p>
                                            <p className="webServices__learnMore">
                                                <Link to="/">Learn more <AiOutlineDoubleRight/></Link>
                                            </p>
                                        </section>
                                    </section>
                                </Col>
                                <Col xs="4">
                                    <section className="webServices__cloudCompute">
                                        <h3 className="webServices__ccHeading">Global infrastructure</h3>
                                        <section className="webServices__benefitPara">
                                            <p>
                                                AWS has the most extensive, reliable, and secure global cloud infrastructure. <br />
                                            </p>
                                            <p className="webServices__learnMore">
                                                <Link to="/">Learn more <AiOutlineDoubleRight/></Link>
                                            </p>
                                        </section>
                                    </section>
                                </Col>
                            </section>
                        </section>
                    </section>
                </section>
                <section className="webServices__pane mb-0">
                    <section className="webServices__container text-center">
                        <section className="webServices__benefits webServices__benefits--sec m-auto">
                            <h1 className="webServices__paneTitle webServices__paneTitle--sec">
                                Ready to get started with AWS?
                            </h1>
                            <section className="webServices__cta row">
                                <Col xs="4" className="m-auto">
                                    <Link className="webServices__account">
                                        <span>Create an AWS account</span>
                                    </Link>
                                </Col>
                            </section>
                        </section>
                    </section>
                </section>                       
            </main>
            <footer className="webServices__footer"> 
                <section className="webServices__footerPri">
                    <div className="webServices__container d-flex">
                        <section className="webServices__footerCol">
                            <h3 className="webServices__footerTitle">Learn About AWS</h3>
                            <ul>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">What is AWS?</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">What Is Cloud Computing?</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">AWS Inclusion, Diversity &amp; Equity</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">What Is DevOps?</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">What Is a Container?</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">What Is a Data Lake?</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">AWS Cloud Security</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">What's New</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">Blogs</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">Press Releases</Link>
                                </li>
                            </ul>
                        </section>
                        <section className="webServices__footerCol">
                            <h3 className="webServices__footerTitle">Resources for AWS</h3>
                            <ul>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">Getting Started</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">Training and Certification</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">AWS Solutions Portfolio</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">Architecture Center</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">Product and Technical FAQs</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">Analyst Reports</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">AWS Partner Network</Link>
                                </li>
                            </ul>
                        </section>
                        <section className="webServices__footerCol">
                            <h3 className="webServices__footerTitle">Developers on AWS</h3>
                            <ul>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">Developer Center</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">SDKs &amp; Tools</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">.NET on AWS</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">Python on AWS</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">Java on AWS</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">PHP on AWS</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">JavaScript on AWS</Link>
                                </li>
                            </ul>
                        </section>
                        <section className="webServices__footerCol">
                            <h3 className="webServices__footerTitle">Learn About AWS</h3>
                            <ul>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">Contact Us</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">AWS Careers</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">File a Support Ticket</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">Knowledge Center</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">AWS re:Post</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">AWS Support Overview</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">Legal</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">What's New</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">Blogs</Link>
                                </li>
                                <li>
                                    <Link to="/" rel="noopener" target="_blank">Press Releases</Link>
                                </li>
                            </ul>
                        </section>
                        <section className="webServices__footerCol">
                            <section className="webServices__cta">
                                <Link className="webServices__account">
                                    <span>Create an AWS account</span>
                                </Link>
                            </section>
                            <section className="webServices__smLinks">
                                <ul className="ml-0 d-inline">
                                    <li className="ipc__inline__list__item">
                                        <Link className="ipc__icon__link ipc__icon__link--baseAlt" to="/">
                                            <AiOutlineTwitter />
                                        </Link>
                                    </li>
                                    <li className="ipc__inline__list__item">
                                        <Link className="ipc__icon__link ipc__icon__link--baseAlt" to="/">
                                            <FaFacebookF />
                                        </Link>
                                    </li>
                                    <li className="ipc__inline__list__item">
                                        <Link className="ipc__icon__link ipc__icon__link--baseAlt" to="/">
                                            <FaTwitch />
                                        </Link>
                                    </li>
                                    <li className="ipc__inline__list__item">
                                        <Link className="ipc__icon__link ipc__icon__link--baseAlt" to="/">
                                            <TiSocialYoutubeCircular />
                                        </Link>
                                    </li>
                                    <li className="ipc__inline__list__item">
                                        <Link className="ipc__icon__link ipc__icon__link--baseAlt" to="/">
                                            <FaPodcast />
                                        </Link>
                                    </li>
                                    <li className="ipc__inline__list__item">
                                        <Link className="ipc__icon__link ipc__icon__link--baseAlt" to="/">
                                            <AiOutlineMail />
                                        </Link>
                                    </li>
                                </ul>
                            </section>
                            <section className="webServices__footerColBox">
                                Amazon is an Equal Opportunity Employer:&nbsp;
                                <i>Minority / Women / Disability / Veteran / Gender Identity / Sexual Orientation / Age.</i>
                            </section>
                        </section>
                    </div>
                </section>
                <section className="webServices__footerSec">
                    <div className="webServices__container d-flex">
                        <ul className="webServices__footerSmallLinks">
                            <li>Language</li>
                            <li><Link to="/" id="">عربي</Link></li>
                            <li><Link to="/" id="">Bahasa Indonesia</Link></li>
                            <li><Link to="/" id="">Deutsch</Link></li>
                            <li><Link to="/" id="">English</Link></li>
                            <li><Link to="/" id="">Español</Link></li>
                            <li><Link to="/" id="">Français</Link></li>
                            <li><Link to="/" id="">Italiano</Link></li>
                            <li><Link to="/" id="">Português</Link></li>
                            <li><Link to="/" id="">Tiếng Việt</Link></li>
                            <li><Link to="/" id="">Türkçe</Link></li>
                            <li><Link to="/" id="">Ρусский</Link></li>
                            <li><Link to="/" id="">ไทย</Link></li>
                            <li><Link to="/" id="">日本語</Link></li>
                            <li><Link to="/" id="">한국어</Link></li>
                            <li><Link to="/" id="">中文 (简体)</Link></li>
                            <li><Link to="/" id="">中文 (繁體)</Link></li>
                        </ul>
                    </div>
                </section>
                <section className="webServices__footerMinor">
                    <div className="webServices__container d-flex">
                        <ul className="webServices__footerSmallLinks">
                            <li><Link to="/" id="">Privacy</Link></li>
                            <li><Link to="/" id="">Site Terms</Link></li>
                            <li><Link to="/" id="">Cookie Preferences </Link></li>
                            <li>© 2022, Amazon Web Services, Inc. or its affiliates. All rights reserved.</li>
                        </ul>
                    </div>
                </section>
            </footer>
        </section>
    )
}

export default AmazonWebServices
