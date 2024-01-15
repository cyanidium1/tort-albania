import React from 'react';

function About(props) {
    return (
        <div className="bg-[#FFE3C4] max-w-4xl mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
            <div className="flex-shrink-0 w-full md:w-1/2 pr-0 md:pr-8 mb-4 md:mb-0">
                <h2 className="text-4xl font-bold mb-4">Добро пожаловать в наш ресторан!</h2>

                <p className="text-lg mb-4">
                    Ресторан "Торт Албания" приглашает вас на незабываемое кулинарное путешествие. Наш
                    ресторан создан с любовью к изысканной кухне и уютной атмосфере. Мы стремимся предоставить
                    нашим гостям неповторимый опыт, насыщенный вкусом и радостью от отличного обслуживания.
                </p>

                <p className="text-lg mb-4">
                    Наша команда талантливых шеф-поваров готовит блюда только из свежих и высококачественных
                    ингредиентов. Меню ресторана предлагает разнообразие кулинарных изысков, от традиционных
                    блюд до авторских кулинарных шедевров.
                </p>

                <p className="text-lg mb-4">
                    Мы гордимся своим уютным интерьером и внимательным обслуживанием. Наш ресторан подходит
                    для различных событий: от ужина на двоих до корпоративных мероприятий. В "Торт Албания"
                    мы создаем атмосферу, в которой каждый гость чувствует себя как дома.
                </p>

                <p className="text-lg mb-4">
                    Приглашаем вас насладиться уникальным опытом и открыть для себя новые вкусы вместе с нами.
                    Мы гарантируем, что каждый посещенный вами "Торт Албания" будет запоминающимся и
                    удовлетворяющим ваш изысканный вкус.
                </p>
            </div>

            <div className="flex-shrink-0 w-full md:w-1/2">
                <img src='https://proforientator.ru/publications/articles/New%20Folder/povar1.jpg' alt="Interior 1" className="w-full h-auto rounded-md mb-4 md:mb-8" />
                <img src='https://profsnabvl.ru/upload/stati/sanpin-odezhdy-povara/trebovania-k-odezhde-povara.jpg' alt="Interior 2" className="w-full h-auto rounded-md" />
            </div>
        </div>
    );
}

export default About;
