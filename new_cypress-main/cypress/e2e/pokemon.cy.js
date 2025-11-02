describe('Проверка покупки нового аватара', function () {                 // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт 
         cy.get('input[id="k_email"]').type('login');                   // вводим логин
         cy.get('input[id="k_password"]').type('pass');               // вводим пароль
         cy.get('button[type="submit"]').click();                // нажимаем кнопку Подтвердить
         cy.get('.header_card_trainer').click();            // Клик в шапке на аву тренера
         cy.get('[data-qa="premium"] > #dropdown > img').click(); // нажимаем кнопку покуупки премиума
         cy.get('.auth__input').type('10'); // вводим количество дней
         cy.get('#buy-premium').click(); // жмем перейти к оплате
         cy.get('.card_number').type('4620869113632996');  // вводим номер карты
         cy.get('.card_csv').type('125');           // вводим код карты
         cy.get('.card_date').type('1226');        // вводим срок действия карты
         cy.get('.card_name').type('NAME');       // вводим имя владельца карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();     // нажимаем Оплатить
         cy.get('.threeds_number').type('56456');                            // вводим код подтверждения СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();   // нажимаем Оплатить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения об успешной покупке
     });
 });