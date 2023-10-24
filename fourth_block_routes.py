from flask import Blueprint, request, jsonify
from models import db, User

fourth_block_routes = Blueprint('fourth_block_routes', __name__)

@fourth_block_routes.route('/fourth_block_option', methods=['POST'])
def fourth_block_option():
    if request.method == 'POST':
        patientid = None  # Define patientid at a higher scope
        try:
            data = request.get_json()
            if 'patientId' in data:
                patientid = data.get('patientId')

                user = User.query.filter_by(patientid=patientid).first()

                if user:
                    # Update the user's lung options
                    user.pastsurgicalhistoryoption = data.get('pastSurgicalHistoryOption', '')
                    user.resipateryoption = data.get('ResipateryOption', '')
                    user.respiratorysystemoption = data.get('respiratorySystemOption', '')
                    user.cardiooption = data.get('CardioOption', '')
                    user.cardiovascularsystemoption = data.get('cardiovascularSystemOption', '')
                    user.renaloption = data.get('RenalOption', '')
                    user.renalsystemoption = data.get('renalSystemOption', '')
                    user.currentmedicationsoption = data.get('currentMedicationsOption', '')
                    

                    db.session.commit()

                    return jsonify({'message': 'breath sound  added successfully', 'patientid': patientid}), 200
                else:
                    print(f'SQL Query: {str(db.session.query(User).filter_by(patientid=patientid))}') 
                    return jsonify({'error': 'Patient not found'}), 404
            else:
                return jsonify({'error': 'Invalid form data format'}), 400
        except Exception as e:
            print(e)  # For debugging
            db.session.rollback()
            print(f'SQL Query: {str(db.session.query(User).filter_by(patientid=patientid))}')  # Print the SQL query
            return jsonify({'error': 'Failed to store lung options in the database'}), 500
