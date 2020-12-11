from flask import Flask, render_template, url_for, request, jsonify, request, make_response
from scipy.integrate import odeint
import numpy as np

app = Flask(__name__)

# function that returns dy/dt
# def model(z,t,k,A,Fin,Tin,Q,rhocp):
#     h=z[0]
#     T=z[1]
#     dhdt = (1/A)*(Fin-(k * np.sqrt(h)))
#     dTdt = ((Fin/(A*h))*(Tin-T))+(Q/(A*h*rhocp))
#     return  [dhdt,dTdt]

@app.route('/')
def get_entry():
    return render_template('index.html')

@app.route('/process-entry', methods=['POST'])
def process_entry():
    req = request.get_json()
    print('test----', req)
    a = (req['slider3_value']) # F_in
    b = int(req['autoTimer']) # Q
    slider3_value = [a]
    autoTimer = [b]

    # initial_level = float(req['initial_level']) 
    
    # # initial condition
    # z = [initial_level, 300]
    # k = 0.1
    # A = 0.2
    # T_in = 300
    # rho_cp = 4000000
    start = 0
    end = 50
    if b-50 > 1:
        start = b-50
        end = b
    t = np.linspace(start,end)
    # t = np.linspace(float(req['time1']),float(req['time2']))     

    # y2  = odeint(model, z, t, args=(k, A, flow_inlet, T_in, heat_inlet, rho_cp))
    
    # liquid_level = y2[:, 0].tolist()
    # temperature = y2[:, 1].tolist()
    time = t.tolist()
    # liquid_level = [round(num, 2) for num in liquid_level]
    # temperature = [round(num, 2) for num in temperature]
    time = [round(num, 0) for num in time]
    result = {
        "slider3_value": a,
        "autoTimer": time
    }
    # print(result)
    res = make_response(jsonify(result), 200)
    return res
