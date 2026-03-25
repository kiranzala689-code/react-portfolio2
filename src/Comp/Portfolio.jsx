import React from "react";
import "./Portfolio.css";
// import Navbar from "./Navbar";
// import Footer from "./Footer";


export default function Portfolio() {
    return (
        <> 
    
            <section className="portfolio-section">
                <div className="container" data-aos="fade-up">

                    <div className="text-center portfolio-heading">
                        <h2>Portfolio</h2>
                        <p>
                            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                        </p>
                    </div>


                    <div className="text-center mb-5">
                        <button className="filter-btn active">All</button>
                        <button className="filter-btn">Strategy</button>
                        <button className="filter-btn">Finance</button>
                        <button className="filter-btn">Operations</button>
                        <button className="filter-btn">Technology</button>
                    </div>


                    <div className="row">


                        <div className="col-md-4 mb-4">
                            <div className="portfolio-card">
                                <img src="https://bootstrapmade.com/content/demo/FolioOne/assets/img/portfolio/portfolio-1.webp" alt="" />
                                <div className="portfolio-info">
                                    <h5>Business Growth Strategy</h5>
                                    <p className="d-flex gap-3">
                                        <span className="bg-dark text-white px-3 py-1 rounded">
                                            Strategy
                                        </span>
                                        <span className="bg-dark text-white px-3 py-1 rounded">
                                            Consulting
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4 mb-4">
                            <div className="portfolio-card">
                                <img src="https://bootstrapmade.com/content/demo/FolioOne/assets/img/portfolio/portfolio-2.webp" alt="" />
                                <div className="portfolio-info">
                                    <h5>Financial Restructuring</h5>
                                    <p className="d-flex gap-3">
                                        <span className="bg-dark text-white px-3 py-1 rounded">
                                            Finance
                                        </span>
                                        <span className="bg-dark text-white px-3 py-1 rounded">
                                            Investment
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="portfolio-card">
                                <img src="https://bootstrapmade.com/content/demo/FolioOne/assets/img/portfolio/portfolio-3.webp" alt="" />
                                <div className="portfolio-info">
                                    <h5>Supply Chain Optimization</h5>
                                    <p className="d-flex gap-3">
                                        <span className="bg-dark text-white px-3 py-1 rounded">
                                            Operations
                                        </span>
                                        <span className="bg-dark text-white px-3 py-1 rounded">
                                            Logistics
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4 mb-4">
                            <div className="portfolio-card">
                                <img src="https://bootstrapmade.com/content/demo/FolioOne/assets/img/portfolio/portfolio-4.webp" alt="" />
                                <div className="portfolio-info">
                                    <h5>Digital Transformation</h5>
                                    <p className="d-flex gap-3">
                                        <span className="bg-dark text-white px-3 py-1 rounded">
                                            Technology
                                        </span>
                                    </p>

                                </div>
                            </div>
                        </div>


                        <div className="col-md-4 mb-4">
                            <div className="portfolio-card">
                                <img src="https://bootstrapmade.com/content/demo/FolioOne/assets/img/portfolio/portfolio-5.webp" alt="" />
                                <div className="portfolio-info">
                                    <h5>Market Expansion</h5>
                                    <p className="d-flex gap-3">
                                        <span className="bg-dark text-white px-3 py-1 rounded">
                                            Strategy
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="portfolio-card">
                                <img src="https://bootstrapmade.com/content/demo/FolioOne/assets/img/portfolio/portfolio-6.webp" alt="" />
                                <div className="portfolio-info">
                                    <h5>Investment Strategy</h5>
                                  <p className="d-flex gap-3">
                                        <span className="bg-dark text-white px-3 py-1 rounded">
                                            Finance
                                        </span>
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
       
        </>
    );
}