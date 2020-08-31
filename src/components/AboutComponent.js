import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function About(props) {

    const leaders = props.leaders.leaders.map(leader => {
        return (
            <RenderLeader leader={leader} />
        );
    });

    function RenderLeader({ leader }) {
        return (
            <Fade in>
                <Media tag="li" key={leader.id} className="col-12 mt-5" >
                    <Media left middle>
                        <Media object src={baseUrl + leader.image} alt={leader.name} />
                    </Media>
                    <Media body className="ml-5">
                        <Media heading>{leader.name}</Media>
                        <p>{leader.designation}</p>
                        <p>{leader.description}</p>
                    </Media>
                </Media>
            </Fade>
        );
    }

    function RenderLeaders() {

        if (props.leaders.isLoading) {
            return <Loading />;
        }
        else if (props.leaders.errMess) {
            return (
                <h4>{props.leaders.errMess}</h4>
            );
        }
        else return (
            <Media list>
                <Stagger in>
                    {leaders}
                </Stagger>
            </Media>
        );
    }

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our Mission</h2>
                    <p>The efforts has started from 2020 as the website is built. Hoping for the real appearnace of the resturant in order to serve yoy all. Hoping for a great jourmey and will be looking forward for your response in order to make this journey wonder ful/</p>
                    <p>The restaurant will be highly motivated from serian food items <em>The great Basturma which will will hot and spicy</em>, Lahmajoun will be the queen dish and would be attracting most of the people.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">1st June 2020</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">Aftab Foods.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$9999999</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">1000</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Its always better taste new things to bring your taste buds to a new level.</p>
                                <footer className="blockquote-footer">Wait for Better Taste,
                                <cite title="Source Title">Working out to make things one of the finest for you all</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Leadership of Resturant</h2>
                </div>
                <div className="col-12">
                    <RenderLeaders />
                </div>
            </div>
        </div>
    );
}

export default About;    