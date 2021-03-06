// source: tax.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var basic_pb = require('./basic_pb.js');
goog.object.extend(proto, basic_pb);
goog.exportSymbol('proto.restaurant.OrderType', null, global);
goog.exportSymbol('proto.restaurant.Tax', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.restaurant.Tax = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.restaurant.Tax.repeatedFields_, null);
};
goog.inherits(proto.restaurant.Tax, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.restaurant.Tax.displayName = 'proto.restaurant.Tax';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.restaurant.Tax.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.restaurant.Tax.prototype.toObject = function(opt_includeInstance) {
  return proto.restaurant.Tax.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.restaurant.Tax} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.restaurant.Tax.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    restId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: (f = msg.getName()) && basic_pb.Name.toObject(includeInstance, f),
    inclusive: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    isPercentage: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    orderTypesList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.restaurant.Tax}
 */
proto.restaurant.Tax.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.restaurant.Tax;
  return proto.restaurant.Tax.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.restaurant.Tax} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.restaurant.Tax}
 */
proto.restaurant.Tax.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRestId(value);
      break;
    case 3:
      var value = new basic_pb.Name;
      reader.readMessage(value,basic_pb.Name.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInclusive(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPercentage(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 7:
      var value = /** @type {!Array<!proto.restaurant.OrderType>} */ (reader.readPackedEnum());
      msg.setOrderTypesList(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.restaurant.Tax.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.restaurant.Tax.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.restaurant.Tax} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.restaurant.Tax.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRestId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      basic_pb.Name.serializeBinaryToWriter
    );
  }
  f = message.getInclusive();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIsPercentage();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getOrderTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      7,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.restaurant.Tax.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.restaurant.Tax} returns this
 */
proto.restaurant.Tax.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string rest_id = 2;
 * @return {string}
 */
proto.restaurant.Tax.prototype.getRestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.restaurant.Tax} returns this
 */
proto.restaurant.Tax.prototype.setRestId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Name name = 3;
 * @return {?proto.restaurant.Name}
 */
proto.restaurant.Tax.prototype.getName = function() {
  return /** @type{?proto.restaurant.Name} */ (
    jspb.Message.getWrapperField(this, basic_pb.Name, 3));
};


/**
 * @param {?proto.restaurant.Name|undefined} value
 * @return {!proto.restaurant.Tax} returns this
*/
proto.restaurant.Tax.prototype.setName = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.restaurant.Tax} returns this
 */
proto.restaurant.Tax.prototype.clearName = function() {
  return this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.restaurant.Tax.prototype.hasName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool inclusive = 4;
 * @return {boolean}
 */
proto.restaurant.Tax.prototype.getInclusive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.restaurant.Tax} returns this
 */
proto.restaurant.Tax.prototype.setInclusive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool is_percentage = 5;
 * @return {boolean}
 */
proto.restaurant.Tax.prototype.getIsPercentage = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.restaurant.Tax} returns this
 */
proto.restaurant.Tax.prototype.setIsPercentage = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional float value = 6;
 * @return {number}
 */
proto.restaurant.Tax.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.restaurant.Tax} returns this
 */
proto.restaurant.Tax.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * repeated OrderType order_types = 7;
 * @return {!Array<!proto.restaurant.OrderType>}
 */
proto.restaurant.Tax.prototype.getOrderTypesList = function() {
  return /** @type {!Array<!proto.restaurant.OrderType>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<!proto.restaurant.OrderType>} value
 * @return {!proto.restaurant.Tax} returns this
 */
proto.restaurant.Tax.prototype.setOrderTypesList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {!proto.restaurant.OrderType} value
 * @param {number=} opt_index
 * @return {!proto.restaurant.Tax} returns this
 */
proto.restaurant.Tax.prototype.addOrderTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.restaurant.Tax} returns this
 */
proto.restaurant.Tax.prototype.clearOrderTypesList = function() {
  return this.setOrderTypesList([]);
};


/**
 * optional google.protobuf.Timestamp created_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.restaurant.Tax.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.restaurant.Tax} returns this
*/
proto.restaurant.Tax.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.restaurant.Tax} returns this
 */
proto.restaurant.Tax.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.restaurant.Tax.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.restaurant.Tax.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.restaurant.Tax} returns this
*/
proto.restaurant.Tax.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.restaurant.Tax} returns this
 */
proto.restaurant.Tax.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.restaurant.Tax.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * @enum {number}
 */
proto.restaurant.OrderType = {
  DINEIN: 0,
  TAKEAWAY: 1,
  AGGREGATORS: 2,
  QSR: 3
};

goog.object.extend(exports, proto.restaurant);
