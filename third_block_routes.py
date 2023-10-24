from flask import Blueprint, request, jsonify
from models import db, User

third_block_routes = Blueprint('third_block_routes', __name__)

@third_block_routes.route('/third_block_option', methods=['POST'])
def third_block_option():
    if request.method == 'POST':
        patientid = None  # Define patientid at a higher scope
        try:
            data = request.get_json()
            if 'patientId' in data:
                patientid = data.get('patientId')

                user = User.query.filter_by(patientid=patientid).first()

                if user:
                    # Update the user's lung options
                    user.breathsound = data.get('breathSoundOption', '')
                    user.laterality = data.get('lateralityOption', '')
                    user.lateralityopt = data.get('lateralityOptionopt', '')
                    user.chestimaging = data.get('imagingOption', '')
                    user.diagnosis = data.get('diagnosisOption', '')
                    user.cnfdiagnosis = data.get('cnfdiagnosisOption', '')
                    user.relapse = data.get('relapseChoice', '')

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
