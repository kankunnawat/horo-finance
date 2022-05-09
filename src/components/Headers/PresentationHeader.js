/*!

=========================================================
* BLK Design System PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'

// reactstrap components
import { Button, Container } from 'reactstrap'

export default function PresentationHeader() {
  const scrollPage = (e) => {
    e.preventDefault()
    document.getElementById('pricing').scrollIntoView()
  }
  return (
    <>
      <div className="page-header">
        <img
          alt="..."
          className="path"
          src={require('assets/img/blob.png').default}
        />
        <img
          alt="..."
          className="path2"
          src={require('assets/img/path2.png').default}
        />
        <img
          alt="..."
          className="shapes triangle"
          src={require('assets/img/triunghiuri.png').default}
        />
        <img
          alt="..."
          className="shapes wave"
          src={require('assets/img/waves.png').default}
        />
        <img
          alt="..."
          className="shapes squares"
          src={require('assets/img/patrat.png').default}
        />
        <img
          alt="..."
          className="shapes circle"
          src={require('assets/img/cercuri.png').default}
        />
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">
              Horo <small className="text-warning">Finance</small>
            </h1>
            <h3>You make your own luck</h3>
            <Button
              className="btn-simple mt-4"
              color="warning"
              href="https://www.creative-tim.com/product/blk-design-system-pro-react?ref=blkdspr-presentation-header"
              size="lg"
              target="_blank"
            >
              Connect Wallet
            </Button>
            <Button
              className="btn-link mt-4 d-block"
              color="warning"
              href="#pablo"
              onClick={scrollPage}
              size="lg"
            >
              {/* <u>Show pricing</u> */}
            </Button>
          </div>
        </Container>
      </div>
    </>
  )
}
