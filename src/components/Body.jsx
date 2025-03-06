import React from 'react';
// import Header from './components/Header';
// import Header from './components/Header.jsx';

const Body = () => {
  return (
    <div >
      <div className="bodyTop">
        <div className="bodyLeft">
          <h2>Next generation digital banking</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adi adipiscing elit.</p>
            <div className="rightDiv">
              <button>Request Invite</button>
          </div>
        </div>
        
        <div className="bodyRight">
          <img src="./images/image-mockups.png" alt="mobiles" />
        </div>
      </div>
      <div className="bodyCenter">
            <div className="contentDiv">
                <h3>Why choose Easybank?</h3>
                <p> Lorem ipsum dolor, sit amet consectetur. Fuga expedita doloremque veniam minus consectetur, obcaecati distinctio repellat tempore harum reprehenderit, sint nam nobis consequatur. Ut commodi nesciunt iure quidem facilis. </p>
            </div>
            <div className="fourBoxes">
                <div className="Boxes">
                    <img src="./images/icon-online.svg" alt="online" />
                    <h4>Online Banking</h4>
                    <p> Lorem ipsum dolor sit amet atum iste veritatis, beatae, eum nemo dolor magni officia ipsam. Ut provident ad nemo.</p>
                </div>
                <div className="Boxes">
                    <img src="./images/icon-budgeting.svg" alt="budgeting" />
                    <h4>Simple Budgeting</h4>
                    <p> Lorem ipsum dolor sit amet atum iste veritatis, beatae, eum nemo dolor magni officia ipsam. Ut provident ad nemo.</p>
                </div>
                <div className="Boxes">
                    <img src="./images/icon-onboarding.svg" alt="onboarding" />
                    <h4>Fast Onboarding</h4>
                    <p> Lorem ipsum dolor sit amet atum iste veritatis, beatae, eum nemo dolor magni officia ipsam. Ut provident ad nemo.</p>
                </div>
                <div className="Boxes">
                    <img src="./images/icon-api.svg" alt="api" />
                    <h4>Open API</h4>
                    <p> Lorem ipsum dolor sit amet atum iste veritatis, beatae, eum nemo dolor magni officia ipsam. Ut provident ad nemo.</p>
                </div>
            </div>
        </div>
          <div className="bodyBottom">
            <h3>Latest Articles</h3>
            <div className="fourBoxes">
                <div className="Boxes">
                    <img src="./images/image-currency.jpg" alt="currency" />
                    <p className='name'>By Claire Robinson</p>
                    <h4>Receive money in any currency without any fee</h4>
                    <p> Lorem ipsum dolor sit amet atum iste veritatis, beatae, eum nemo dolor magni officia ipsam. Lorem ipsum dolor sit amet atum iste veritatis, beatae, eum nemo dolor magni officia ipsam. Ut provident ad nemo.</p>
                </div>
                <div className="Boxes">
                    <img src="./images/image-restaurant.jpg" alt="budgeting" />
                    <p className='name'>By Willson Hutton</p>
                    <h4>Treat yourself without worrying about money</h4>
                    <p> Lorem ipsum dolor sit amet atum iste veritatis, beatae, eum nemo dolor magni officia ipsam. Ut provident ad nemo. Lorem ipsum dolor sit amet atum iste veritatis, beatae, eum nemo dolor magni officia ipsam.</p>
                </div>
                <div className="Boxes">
                    <img src="./images/image-plane.jpg" alt="onboarding" />
                    <p className='name'>By Willson Hutton</p>
                    <h4>Take your Easybank card wherever you go</h4>
                    <p> Lorem ipsum dolor sit amet atum iste veritatis, beatae, eum nemo dolor magni officia ipsam. Ut provident ad nemo. Lorem ipsum dolor sit amet atum iste veritatis, beatae, eum nemo dolor magni officia ipsam.</p>
                </div>
                <div className="Boxes">
                    <img src="./images/image-confetti.jpg" alt="confetti" />
                    <p className='name'>By Claire Robinson</p>
                    <h4>Our invite-only Beta accounts are now live!</h4>
                    <p> Lorem ipsum dolor sit amet atum iste veritatis, beatae, eum nemo dolor magni officia ipsam. Ut provident ad nemo. Lorem ipsum dolor sit amet atum iste veritatis, beatae, eum nemo dolor magni officia ipsam.</p>
                </div>
            </div>
          </div>
    </div>
  );
};

export default Body;
