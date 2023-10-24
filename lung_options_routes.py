from flask import Blueprint, request, jsonify
from models import db, User

lung_options_routes = Blueprint('lung_options_routes', __name__)

@lung_options_routes.route('/add_lung_options', methods=['POST'])
def add_lung_options():
    if request.method == 'POST':
        patientid = None  # Define patientid at a higher scope
        try:
            data = request.get_json()
            if 'patientId' in data:
                patientid = data.get('patientId')

                user = User.query.filter_by(patientid=patientid).first()

                if user:
                    # Update the user's lung options
                    user.lungoptions = data.get('lungOption', '')
                    user.chiefcomplaints = data.get('chiefOption', '')
                    user.pastmedicalhistory = data.get('pastMedicalHistoryOption', '')
                    user.substanceabuse = data.get('substanceAbuseOption', '')

                    db.session.commit()

                    return jsonify({'message': 'Lung options added successfully', 'patientid': patientid}), 200
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
