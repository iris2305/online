from flask import Flask

###### App setup
app = Flask(__name__)
app.secret_key = 'a72389dda4d674'
app.config.from_pyfile('settings.py')


###### Pages

## Login
from Pages.Login.Login import Login
app.online(Login)


## About
from Pages.About.About import About
app.register_blueprint(About)

## Shop
from Pages.Shop.Shop import Shop
app.register_blueprint(Shop)


## CoreTraining
from Pages.CoreTraining.CoreTraining import CoreTraining
app.register_blueprint(CoreTraining)

## ExtremeWorkout
from Pages.ExtremeWorkout.ExtremeWorkout import ExtremeWorkout
app.register_blueprint(ExtremeWorkout)

## HighTraining
from Pages.HighTraining.HighTraining import HighTraining
app.register_blueprint(HighTraining)

## HomePage
from Pages.HomePage.HomePage import HomePage
app.register_blueprint(HomePage)


## Logout
from Pages.Logout.Logout import Logout
app.register_blueprint(Logout)

## Payment
from Pages.Payment.Payment import Payment
app.register_blueprint(Payment)

## PaymentForSub
from Pages.PaymentForSub.PaymentForSub import PaymentForSub
app.register_blueprint(PaymentForSub)


## PricesAgain
from Pages.PricesAgain.PricesAgain import PricesAgain
app.register_blueprint(PricesAgain)


## Message
from Pages.Message.Message import Message
app.register_blueprint(Message)

## Ops
from Pages.Ops.Ops import Ops
app.register_blueprint(Ops)


## MessageFor
from Pages.MessageFor.MessageFor import MessageFor
app.register_blueprint(MessageFor)



## PaymentForProducts
from Pages.PaymentForProducts.PaymentForProducts import PaymentForProducts
app.register_blueprint(PaymentForProducts)

## Prices
from Pages.Prices.Prices import Prices
app.register_blueprint(Prices)

## PrivateZone
from Pages.PrivateZone.PrivateZone import PrivateZone
app.register_blueprint(PrivateZone)

## Product
from Pages.Product.Product import Product
app.register_blueprint(Product)

## Register
from Pages.Register.Register import Register
app.register_blueprint(Register)

## SignTo
from Pages.SignTo.SignTo import SignTo
app.register_blueprint(SignTo)



## Page error handlers
from Pages.page_error_handlers.page_error_handlers import page_error_handlers
app.register_blueprint(page_error_handlers)


###### Components
## Main menu
from components.main_menu.main_menu import main_menu
app.register_blueprint(main_menu)
