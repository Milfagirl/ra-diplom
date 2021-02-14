import React from 'react'
import banner from '../img/banner.jpg'
export default function NotFound() {
    return (
        <main className="container">
        <div className="row">
            <div className="col">
                <div className="banner">
                    <img src={banner} class="img-fluid" alt="К весне готовы!"/>
                    <h2 className="banner-header">К весне готовы!</h2>
                </div>

                <section class="top-sales">
                    <h2 class="text-center">Страница не найдена</h2>
                    <p>
                        Извините, такая страница не найдена!
                    </p>
                </section>
            </div>
        </div>
    </main>
    )
}