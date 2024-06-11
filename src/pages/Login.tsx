import React, {useState} from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import axios from "axios";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(localStorage.getItem('token'));

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://backendnewstore.netlify.app/login', { email, password });
            console.log('Response:', response);
            const receivedToken = response.data.token;
            setToken(receivedToken);
            localStorage.setItem('token', receivedToken);
            location.reload();
        } catch (error) {
            // @ts-ignore
            if (error.response) {
                // @ts-ignore
                console.error('Login failed:', error.response.data);
            } else { // @ts-ignore
                if (error.request) {
                                // @ts-ignore
                    console.error('No response received:', error.request);
                            } else {
                                // @ts-ignore
                    console.error('Error in setting up request:', error.message);
                            }
            }
        }
    };
    return (
        <div style={{backgroundColor: "#508bfc", height: "100vh"}}>
            <MDBContainer fluid>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>
                        <MDBCard className='bg-white w-100 mx-auto position-absolute top-50 start-50 translate-middle' style={{borderRadius: '1rem', maxWidth: '500px'}}>
                            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                                <p className="text-white-50 mb-3">Please enter your login and password!</p>
                                <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='email' type='email' size="lg" onChange={(e) => setEmail(e.target.value)}/>
                                <MDBInput wrapperClass='mb-4 w-100' label='Password' id='password' type='password' size="lg" onChange={(e) => setPassword(e.target.value)}/>
                                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
                                <MDBBtn size='lg' style={{height: "50px"}} onClick={handleLogin}>
                                    Login
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default Login;