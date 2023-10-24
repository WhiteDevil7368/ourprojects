# api_routes.py
from flask import Blueprint, jsonify, request
from models import User  # Import your User model

api_routes = Blueprint('api_routes', __name__)

@api_routes.route('/get_user_data', methods=['GET'])
def get_user_data():
    try:
        patient_id = request.args.get('patient_id')
        user = User.query.filter_by(patientid=patient_id).first()
        if user:
            user_data = {
                'firstname': user.firstname,
                'lastname': user.lastname,
                'sex': user.sex,
                'weight': user.weight,
                'marital': user.marital,
                'dob': user.dob,
                'organ':user.organ,
                'lungoption': user.lungoptions,
                'chiefcomplaints': user.chiefcomplaints,
                'pastmedicalhistory': user.pastmedicalhistory,
                'substanceabuse':user.substanceabuse,
                'breathsound':user.breathsound,
                'laterality': user.laterality,
                'lateralityopt': user.lateralityopt,
                'chestimaging':user.chestimaging,
                'diagnosis':user.diagnosis,
                'cnfdiagnosis':user.cnfdiagnosis,
                'relapse': user.relapse,
                'pastsurgicalhistoryoption':user.pastsurgicalhistoryoption,
                'resipateryoption':user.resipateryoption,
                'respiratorysystemoption':user.respiratorysystemoption,
                'cardiooption':user.cardiooption,
                'cardiovascularsystemoption':user.cardiovascularsystemoption,
                'renaloption':user.renaloption,
                'renalsystemoption':user.renalsystemoption,
                'currentmedicationsoption':user.currentmedicationsoption,   
                'adversereaction':user.adversereaction,
                'created_at': user.created_at

                                # Add more fields as needed
            }
            return jsonify(user_data)
        return jsonify({'error': 'User not found'}), 404
    except Exception as e:
        # Log the error for debugging
        print(f"Error in get_user_data: {str(e)}")
        return jsonify({'error': 'An error occurred'}), 500

