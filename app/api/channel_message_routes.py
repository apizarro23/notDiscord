import json
from socket import socket
from flask import Blueprint, jsonify, request, render_template
from flask_login import current_user, login_required
from .auth_routes import login, validation_errors_to_error_messages
from app.models import channel_message, db, DirectMessage, User, DirectChat, ChannelMessage
from app.forms import ServerForm, ChannelForm
from flask_socketio import SocketIO, join_room

channel_messages = Blueprint('chat_messages', __name__)
socketio = SocketIO(channel_messages)