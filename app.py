from flask import Flask, current_app
from flask_cors import CORS
from models import db
from user_routes import user_routes
from lung_options_routes import lung_options_routes
from third_block_routes import third_block_routes
from fourth_block_routes import fourth_block_routes
from fifth_block_routes import fifth_block_routes
from api_routes import api_routes

app = Flask(__name__)
CORS(app)

# Initialize the Flask session
app.secret_key = 's9a9t3y1a4m8k8u7m5a7r'  # Change 'your_secret_key' to a secure, random string

# MySQL configuration (update with your actual MySQL database details)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:@localhost/raj'
db.init_app(app)

app.register_blueprint(user_routes)
app.register_blueprint(lung_options_routes)
app.register_blueprint(third_block_routes)
app.register_blueprint(fourth_block_routes)
app.register_blueprint(fifth_block_routes)
app.register_blueprint(api_routes)


if __name__ == '__main__':
    app.run(debug=True)
