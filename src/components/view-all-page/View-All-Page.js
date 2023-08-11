import { useEffect } from "react";

const ViewAll = ({data}) => {

    useEffect(() => {
        window.scrollTo({
            top: '0',
            behavior: 'smooth',
        });
    }, [])

    return (
        <div className='container bg-dark' id='view-all'>
            <div className='section'>
                <div className='heading'>
                    <div className='heading-left'>
                        <h3>Popular Movies Today</h3>
                    </div>
                </div>
                <div className='view-all'>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img src='https://images.unsplash.com/photo-1602248003575-934425e8088d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' alt='poster' />
                        </div>
                        <div className='card-container-icons'>
                            <p><i className="fa-solid fa-clock"></i> 2hr</p>
                            <p><i className="fa-solid fa-star"></i> 5.0</p>
                            <p><i className="fa-regular fa-calendar-days"></i> 2023</p>
                        </div>
                        <div className='card-container-title'>
                            <p>Marc Edwin Fernandez Mamaradlo</p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img src='https://images.unsplash.com/photo-1602248003575-934425e8088d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' alt='poster' />
                        </div>
                        <div className='card-container-icons'>
                            <p><i className="fa-solid fa-clock"></i> 2hr</p>
                            <p><i className="fa-solid fa-star"></i> 5.0</p>
                            <p><i className="fa-regular fa-calendar-days"></i> 2023</p>
                        </div>
                        <div className='card-container-title'>
                            <p>Some Title Goes Here </p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img src='https://images.unsplash.com/photo-1602248003575-934425e8088d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' alt='poster' />
                        </div>
                        <div className='card-container-icons'>
                            <p><i className="fa-solid fa-clock"></i> 2hr</p>
                            <p><i className="fa-solid fa-star"></i> 5.0</p>
                            <p><i className="fa-regular fa-calendar-days"></i> 2023</p>
                        </div>
                        <div className='card-container-title'>
                            <p>Some Title Goes Here </p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img src='https://images.unsplash.com/photo-1602248003575-934425e8088d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' alt='poster' />
                        </div>
                        <div className='card-container-icons'>
                            <p><i className="fa-solid fa-clock"></i> 2hr</p>
                            <p><i className="fa-solid fa-star"></i> 5.0</p>
                            <p><i className="fa-regular fa-calendar-days"></i> 2023</p>
                        </div>
                        <div className='card-container-title'>
                            <p>Some Title Goes Here </p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img src='https://images.unsplash.com/photo-1602248003575-934425e8088d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' alt='poster' />
                        </div>
                        <div className='card-container-icons'>
                            <p><i className="fa-solid fa-clock"></i> 2hr</p>
                            <p><i className="fa-solid fa-star"></i> 5.0</p>
                            <p><i className="fa-regular fa-calendar-days"></i> 2023</p>
                        </div>
                        <div className='card-container-title'>
                            <p>Some Title Goes Here </p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img src='https://images.unsplash.com/photo-1602248003575-934425e8088d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' alt='poster' />
                        </div>
                        <div className='card-container-icons'>
                            <p><i className="fa-solid fa-clock"></i> 2hr</p>
                            <p><i className="fa-solid fa-star"></i> 5.0</p>
                            <p><i className="fa-regular fa-calendar-days"></i> 2023</p>
                        </div>
                        <div className='card-container-title'>
                            <p>Some Title Goes Here </p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img src='https://images.unsplash.com/photo-1602248003575-934425e8088d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' alt='poster' />
                        </div>
                        <div className='card-container-icons'>
                            <p><i className="fa-solid fa-clock"></i> 2hr</p>
                            <p><i className="fa-solid fa-star"></i> 5.0</p>
                            <p><i className="fa-regular fa-calendar-days"></i> 2023</p>
                        </div>
                        <div className='card-container-title'>
                            <p>Some Title Goes Here </p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img src='https://images.unsplash.com/photo-1602248003575-934425e8088d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' alt='poster' />
                        </div>
                        <div className='card-container-icons'>
                            <p><i className="fa-solid fa-clock"></i> 2hr</p>
                            <p><i className="fa-solid fa-star"></i> 5.0</p>
                            <p><i className="fa-regular fa-calendar-days"></i> 2023</p>
                        </div>
                        <div className='card-container-title'>
                            <p>Some Title Goes Here </p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img src='https://images.unsplash.com/photo-1602248003575-934425e8088d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' alt='poster' />
                        </div>
                        <div className='card-container-icons'>
                            <p><i className="fa-solid fa-clock"></i> 2hr</p>
                            <p><i className="fa-solid fa-star"></i> 5.0</p>
                            <p><i className="fa-regular fa-calendar-days"></i> 2023</p>
                        </div>
                        <div className='card-container-title'>
                            <p>Some Title Goes Here </p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img src='https://images.unsplash.com/photo-1602248003575-934425e8088d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' alt='poster' />
                        </div>
                        <div className='card-container-icons'>
                            <p><i className="fa-solid fa-clock"></i> 2hr</p>
                            <p><i className="fa-solid fa-star"></i> 5.0</p>
                            <p><i className="fa-regular fa-calendar-days"></i> 2023</p>
                        </div>
                        <div className='card-container-title'>
                            <p>Some Title Goes Here </p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img src='https://images.unsplash.com/photo-1602248003575-934425e8088d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' alt='poster' />
                        </div>
                        <div className='card-container-icons'>
                            <p><i className="fa-solid fa-clock"></i> 2hr</p>
                            <p><i className="fa-solid fa-star"></i> 5.0</p>
                            <p><i className="fa-regular fa-calendar-days"></i> 2023</p>
                        </div>
                        <div className='card-container-title'>
                            <p>Some Title Goes Here </p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img src='https://images.unsplash.com/photo-1602248003575-934425e8088d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' alt='poster' />
                        </div>
                        <div className='card-container-icons'>
                            <p><i className="fa-solid fa-clock"></i> 2hr</p>
                            <p><i className="fa-solid fa-star"></i> 5.0</p>
                            <p><i className="fa-regular fa-calendar-days"></i> 2023</p>
                        </div>
                        <div className='card-container-title'>
                            <p>Some Title Goes Here </p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img src='https://images.unsplash.com/photo-1602248003575-934425e8088d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' alt='poster' />
                        </div>
                        <div className='card-container-icons'>
                            <p><i className="fa-solid fa-clock"></i> 2hr</p>
                            <p><i className="fa-solid fa-star"></i> 5.0</p>
                            <p><i className="fa-regular fa-calendar-days"></i> 2023</p>
                        </div>
                        <div className='card-container-title'>
                            <p>Some Title Goes Here </p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img src='https://images.unsplash.com/photo-1602248003575-934425e8088d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' alt='poster' />
                        </div>
                        <div className='card-container-icons'>
                            <p><i className="fa-solid fa-clock"></i> 2hr</p>
                            <p><i className="fa-solid fa-star"></i> 5.0</p>
                            <p><i className="fa-regular fa-calendar-days"></i> 2023</p>
                        </div>
                        <div className='card-container-title'>
                            <p>Some Title Goes Here </p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img src='https://images.unsplash.com/photo-1602248003575-934425e8088d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' alt='poster' />
                        </div>
                        <div className='card-container-icons'>
                            <p><i className="fa-solid fa-clock"></i> 2hr</p>
                            <p><i className="fa-solid fa-star"></i> 5.0</p>
                            <p><i className="fa-regular fa-calendar-days"></i> 2023</p>
                        </div>
                        <div className='card-container-title'>
                            <p>Some Title Goes Here </p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img src='https://images.unsplash.com/photo-1602248003575-934425e8088d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' alt='poster' />
                        </div>
                        <div className='card-container-icons'>
                            <p><i className="fa-solid fa-clock"></i> 2hr</p>
                            <p><i className="fa-solid fa-star"></i> 5.0</p>
                            <p><i className="fa-regular fa-calendar-days"></i> 2023</p>
                        </div>
                        <div className='card-container-title'>
                            <p>Some Title Goes Here </p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img src='https://images.unsplash.com/photo-1602248003575-934425e8088d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' alt='poster' />
                        </div>
                        <div className='card-container-icons'>
                            <p><i className="fa-solid fa-clock"></i> 2hr</p>
                            <p><i className="fa-solid fa-star"></i> 5.0</p>
                            <p><i className="fa-regular fa-calendar-days"></i> 2023</p>
                        </div>
                        <div className='card-container-title'>
                            <p>Some Title Goes Here </p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img src='https://images.unsplash.com/photo-1602248003575-934425e8088d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' alt='poster' />
                        </div>
                        <div className='card-container-icons'>
                            <p><i className="fa-solid fa-clock"></i> 2hr</p>
                            <p><i className="fa-solid fa-star"></i> 5.0</p>
                            <p><i className="fa-regular fa-calendar-days"></i> 2023</p>
                        </div>
                        <div className='card-container-title'>
                            <p>Some Title Goes Here </p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img src='https://images.unsplash.com/photo-1602248003575-934425e8088d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' alt='poster' />
                        </div>
                        <div className='card-container-icons'>
                            <p><i className="fa-solid fa-clock"></i> 2hr</p>
                            <p><i className="fa-solid fa-star"></i> 5.0</p>
                            <p><i className="fa-regular fa-calendar-days"></i> 2023</p>
                        </div>
                        <div className='card-container-title'>
                            <p>Some Title Goes Here </p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img src='https://images.unsplash.com/photo-1602248003575-934425e8088d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' alt='poster' />
                        </div>
                        <div className='card-container-icons'>
                            <p><i className="fa-solid fa-clock"></i> 2hr</p>
                            <p><i className="fa-solid fa-star"></i> 5.0</p>
                            <p><i className="fa-regular fa-calendar-days"></i> 2023</p>
                        </div>
                        <div className='card-container-title'>
                            <p>Some Title Goes Here </p>
                        </div>
                    </div>
                </div>
                <div className='pagenation'>
                    <p><i className="fa-solid fa-caret-left"></i></p>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p><i className="fa-solid fa-caret-right"></i></p>
                </div>
            </div>
        </div>
    )
}

export default ViewAll;