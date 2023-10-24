from flask import Blueprint, request, jsonify
from models import db, User

user_routes = Blueprint('user_routes', __name__)

@user_routes.route('/add', methods=['POST'])
def submit():
    if request.method == 'POST':
        try:
            data = request.get_json()
            if 'firstname' in data:
                firstname = data['firstname']
                lastname = data['lastname']
                sex = data.get('sex', '')
                marital_status = data.get('marital', '')
                dob = data.get('dob', None)
                organ = data.get('organ', '')
                weight = data.get('weight', None)
                patientid = data.get('patientId', '')
                pastsurgicalhistoryoption = data.get('pastSurgicalHistoryOption', '')
                resipateryoption = data.get('ResipateryOption', '')
                respiratorysystemoption = data.get('respiratorySystemOption', '')
                cardiooption = data.get('CardioOption', '')
                cardiovascularsystemoption = data.get('cardiovascularSystemOption', '')
                renaloption = data.get('FRenalOption', '')
                renalsystemoption = data.get('renalSystemOption', '')
                currentmedicationsoption = data.get('currentMedicationsOption', '')
                adversereaction = data.get('adverseReactionOption', '')
                new_user = User(patientid=patientid, firstname=firstname, lastname=lastname, sex=sex, marital=marital_status, dob=dob, organ=organ, weight=weight, lungoptions=data.get('lungoptions', ''), chiefcomplaints=data.get('chiefcomplaints', ''), pastmedicalhistory=data.get('pastmedicalhistory', ''),substanceabuse=data.get('substanceabuse', ''),breathsound=data.get('breathsound',''),laterality=data.get('laterality',''),lateralityopt=data.get('lateralityopt',''),chestimaging=data.get('chestimaging',''),diagnosis=data.get('diagnosis',''),cnfdiagnosis=data.get('cnfdiagnosis',''),relapse=data.get('relapse',''),pastsurgicalhistoryoption = pastsurgicalhistoryoption, resipateryoption =resipateryoption, respiratorysystemoption = respiratorysystemoption, cardiooption = cardiooption, cardiovascularsystemoption = cardiovascularsystemoption, renaloption = renaloption, renalsystemoption =renalsystemoption,currentmedicationsoption=  currentmedicationsoption, adversereaction = adversereaction)
                db.session.add(new_user)
                db.session.commit()
                return jsonify({'message': 'User created successfully', 'patientid': patientid}), 201
            else:
                return jsonify({'error': 'Invalid form data format'}), 400
        except Exception as e:
            print(e)  # For debugging
            db.session.rollback()  # Roll back the transaction in case of an error
            return jsonify({'error': 'Failed to store data in the database'}), 500
