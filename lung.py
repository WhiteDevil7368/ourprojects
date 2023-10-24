from flask import Flask, request, jsonify, render_template, session
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import random
import string

app = Flask(__name__)
CORS(app)

# Initialize the Flask session
app.secret_key = 's9a9t3y1a4m8k8u7m5a7r'  # Change 'your_secret_key' to a secure, random string

# MySQL configuration (update with your actual MySQL database details)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:@localhost/raj'
db = SQLAlchemy(app)

# Define a SQLAlchemy model to represent the data
class User(db.Model):
    __tablename__ = 'user'  # Update with your table name
    sno = db.Column(db.Integer, primary_key=True)
    patientid = db.Column(db.String(10), unique=True, nullable=False)  # Add patientid field
    lungoptions = db.Column(db.String(200))  # Add the lungoptions column


        
@app.route('/add_lung_options', methods=['POST'])
def add_lung_options():
    if request.method == 'POST':
        patientid = None  # Define patientid at a higher scope
        try:
            data = request.get_json()
            if 'patientId' in data:
                patientid = data['patientId']

                user = User.query.filter_by(patientid=patientid).first()

                if user:
                    # Update the user's lung options
                    user.lungoptions = data.get('lungOption', '')


                    db.session.commit()

                    return jsonify({'message': 'Lung options added successfully', 'patientid': patientid}), 200
                else:
                    return jsonify({'error': 'Patient not found'}), 404
            else:
                return jsonify({'error': 'Invalid form data format'}), 400
        except Exception as e:
            print(e)  # For debugging
            print(f'SQL Query: {str(db.session.query(User).filter_by(patientid=patientid))}')  # Print the SQL query
            return jsonify({'error': 'Failed to store lung options in the database'}), 500




if __name__ == '__main__':
    app.run(debug=True)
