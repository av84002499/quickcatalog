import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Menu = () => {
    const { id } = useParams();
    const [menuItem, setMenuItem] = useState([]);
    const [shopdtl, seTshopdtl] = useState({})

    useEffect(() => {
        const fetchMenuItem = async () => {
            try {
                const response = await fetch(`https://quickcatalog.online/api/menu/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch menu item');
                }
                const result = await response.json();
                setMenuItem(result.products);
                seTshopdtl(result.shopDtl);
            } catch (error) {
                console.error('Error fetching menu item:', error);
            }
        };
        fetchMenuItem();
    }, [id]);

    return (
        <>
        <div style={{
            backgroundImage: `url('https://quickcatalog.online/uploads/${shopdtl.imageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
                <section className="innerpages-banner text-center innerpages-banner-hair">
                    <div className="container">
                        <div className="inner-banner-text text-center">

                            <h1>{shopdtl.shopname}</h1>
                            <p>{shopdtl.address}
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <section className="dishes-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 text-center mx-auto">
                            <div className="menu-section-title text-center">
                                <h2>Our Menu</h2>
                                <div className="m-icon">
                                    <i className="fa-solid fa-utensils"></i>
                                </div>
                                <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                        </div>

                    </div>
                    <hr />
                    <div className="container">
                        <div className="tab-pane fade show active" id="tabmenu-one" role="tabpanel" aria-labelledby="tabmenu-one-tab">
                            <div className="row">
                                {menuItem.map((product, index) => (<>
                                    <div key={index} className="menu-style col-md-6">
                                        <div className="menu-item align-items-center d-flex">
                                        <div className="menu-item-thumbnail">
                                        <img src={'https://quickcatalog.online/uploads/' + product.imageUrl} className="img-fluid rounded-start w-100 h-100" alt="..." />
                                    </div>
                                            <div className="menu-item-description">
                                                <h5>{product.name}</h5>
                                                <p>Size: {product.sizes.map((size) => (<>
                                                    {size}
                                                </>))}
                                                </p>
                                            </div>
                                            <div className="menu-item-price">
                                                <p>Rs.{product.price}/-</p>
                                            </div>
                                        </div>
                                    </div>
                                </>))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Menu