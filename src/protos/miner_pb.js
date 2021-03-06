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

var core_pb = require('./core_pb.js');
goog.exportSymbol('proto.bc.BlockFingerprint', null, global);
goog.exportSymbol('proto.bc.MinerRequest', null, global);
goog.exportSymbol('proto.bc.MinerResponse', null, global);
goog.exportSymbol('proto.bc.MinerResponseResult', null, global);

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
proto.bc.BlockFingerprint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bc.BlockFingerprint, jspb.Message);
if (true || goog.DEBUG && !COMPILED) {
  proto.bc.BlockFingerprint.displayName = 'proto.bc.BlockFingerprint';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bc.BlockFingerprint.prototype.toObject = function(opt_includeInstance) {
  return proto.bc.BlockFingerprint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bc.BlockFingerprint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bc.BlockFingerprint.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockchain: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hash: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isCurrent: jspb.Message.getFieldWithDefault(msg, 4, false)
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
 * @return {!proto.bc.BlockFingerprint}
 */
proto.bc.BlockFingerprint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bc.BlockFingerprint;
  return proto.bc.BlockFingerprint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bc.BlockFingerprint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bc.BlockFingerprint}
 */
proto.bc.BlockFingerprint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockchain(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsCurrent(value);
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
proto.bc.BlockFingerprint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bc.BlockFingerprint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bc.BlockFingerprint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bc.BlockFingerprint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockchain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getIsCurrent();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string blockchain = 1;
 * @return {string}
 */
proto.bc.BlockFingerprint.prototype.getBlockchain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.bc.BlockFingerprint.prototype.setBlockchain = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string hash = 2;
 * @return {string}
 */
proto.bc.BlockFingerprint.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.bc.BlockFingerprint.prototype.setHash = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint64 timestamp = 3;
 * @return {number}
 */
proto.bc.BlockFingerprint.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.bc.BlockFingerprint.prototype.setTimestamp = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional bool is_current = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.bc.BlockFingerprint.prototype.getIsCurrent = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.bc.BlockFingerprint.prototype.setIsCurrent = function(value) {
  jspb.Message.setField(this, 4, value);
};



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
proto.bc.MinerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bc.MinerRequest, jspb.Message);
if (true || goog.DEBUG && !COMPILED) {
  proto.bc.MinerRequest.displayName = 'proto.bc.MinerRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bc.MinerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bc.MinerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bc.MinerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bc.MinerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    workId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currentTimestamp: jspb.Message.getFieldWithDefault(msg, 2, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 3, 0),
    work: jspb.Message.getFieldWithDefault(msg, 4, ""),
    minerKey: jspb.Message.getFieldWithDefault(msg, 5, ""),
    merkleRoot: jspb.Message.getFieldWithDefault(msg, 6, ""),
    difficulty: jspb.Message.getFieldWithDefault(msg, 7, ""),
    lastPreviousBlock: (f = msg.getLastPreviousBlock()) && core_pb.BcBlock.toObject(includeInstance, f),
    newBlockHeaders: (f = msg.getNewBlockHeaders()) && core_pb.BlockchainHeaders.toObject(includeInstance, f)
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
 * @return {!proto.bc.MinerRequest}
 */
proto.bc.MinerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bc.MinerRequest;
  return proto.bc.MinerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bc.MinerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bc.MinerRequest}
 */
proto.bc.MinerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCurrentTimestamp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOffset(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWork(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinerKey(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMerkleRoot(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDifficulty(value);
      break;
    case 8:
      var value = new core_pb.BcBlock;
      reader.readMessage(value,core_pb.BcBlock.deserializeBinaryFromReader);
      msg.setLastPreviousBlock(value);
      break;
    case 9:
      var value = new core_pb.BlockchainHeaders;
      reader.readMessage(value,core_pb.BlockchainHeaders.deserializeBinaryFromReader);
      msg.setNewBlockHeaders(value);
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
proto.bc.MinerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bc.MinerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bc.MinerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bc.MinerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrentTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getWork();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMinerKey();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMerkleRoot();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDifficulty();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getLastPreviousBlock();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      core_pb.BcBlock.serializeBinaryToWriter
    );
  }
  f = message.getNewBlockHeaders();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      core_pb.BlockchainHeaders.serializeBinaryToWriter
    );
  }
};


/**
 * optional string work_id = 1;
 * @return {string}
 */
proto.bc.MinerRequest.prototype.getWorkId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.bc.MinerRequest.prototype.setWorkId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint64 current_timestamp = 2;
 * @return {number}
 */
proto.bc.MinerRequest.prototype.getCurrentTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.bc.MinerRequest.prototype.setCurrentTimestamp = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 offset = 3;
 * @return {number}
 */
proto.bc.MinerRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.bc.MinerRequest.prototype.setOffset = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string work = 4;
 * @return {string}
 */
proto.bc.MinerRequest.prototype.getWork = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.bc.MinerRequest.prototype.setWork = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string miner_key = 5;
 * @return {string}
 */
proto.bc.MinerRequest.prototype.getMinerKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.bc.MinerRequest.prototype.setMinerKey = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string merkle_root = 6;
 * @return {string}
 */
proto.bc.MinerRequest.prototype.getMerkleRoot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.bc.MinerRequest.prototype.setMerkleRoot = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional string difficulty = 7;
 * @return {string}
 */
proto.bc.MinerRequest.prototype.getDifficulty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.bc.MinerRequest.prototype.setDifficulty = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional BcBlock last_previous_block = 8;
 * @return {?proto.bc.BcBlock}
 */
proto.bc.MinerRequest.prototype.getLastPreviousBlock = function() {
  return /** @type{?proto.bc.BcBlock} */ (
    jspb.Message.getWrapperField(this, core_pb.BcBlock, 8));
};


/** @param {?proto.bc.BcBlock|undefined} value */
proto.bc.MinerRequest.prototype.setLastPreviousBlock = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.bc.MinerRequest.prototype.clearLastPreviousBlock = function() {
  this.setLastPreviousBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bc.MinerRequest.prototype.hasLastPreviousBlock = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional BlockchainHeaders new_block_headers = 9;
 * @return {?proto.bc.BlockchainHeaders}
 */
proto.bc.MinerRequest.prototype.getNewBlockHeaders = function() {
  return /** @type{?proto.bc.BlockchainHeaders} */ (
    jspb.Message.getWrapperField(this, core_pb.BlockchainHeaders, 9));
};


/** @param {?proto.bc.BlockchainHeaders|undefined} value */
proto.bc.MinerRequest.prototype.setNewBlockHeaders = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.bc.MinerRequest.prototype.clearNewBlockHeaders = function() {
  this.setNewBlockHeaders(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bc.MinerRequest.prototype.hasNewBlockHeaders = function() {
  return jspb.Message.getField(this, 9) != null;
};



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
proto.bc.MinerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bc.MinerResponse, jspb.Message);
if (true || goog.DEBUG && !COMPILED) {
  proto.bc.MinerResponse.displayName = 'proto.bc.MinerResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bc.MinerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bc.MinerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bc.MinerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bc.MinerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nonce: jspb.Message.getFieldWithDefault(msg, 2, ""),
    difficulty: jspb.Message.getFieldWithDefault(msg, 3, ""),
    distance: jspb.Message.getFieldWithDefault(msg, 4, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 5, 0),
    iterations: jspb.Message.getFieldWithDefault(msg, 6, 0),
    timeDiff: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.bc.MinerResponse}
 */
proto.bc.MinerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bc.MinerResponse;
  return proto.bc.MinerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bc.MinerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bc.MinerResponse}
 */
proto.bc.MinerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bc.MinerResponseResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNonce(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDifficulty(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDistance(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIterations(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimeDiff(value);
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
proto.bc.MinerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bc.MinerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bc.MinerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bc.MinerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getNonce();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDifficulty();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDistance();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getIterations();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getTimeDiff();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
};


/**
 * optional MinerResponseResult result = 1;
 * @return {!proto.bc.MinerResponseResult}
 */
proto.bc.MinerResponse.prototype.getResult = function() {
  return /** @type {!proto.bc.MinerResponseResult} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.bc.MinerResponseResult} value */
proto.bc.MinerResponse.prototype.setResult = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string nonce = 2;
 * @return {string}
 */
proto.bc.MinerResponse.prototype.getNonce = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.bc.MinerResponse.prototype.setNonce = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string difficulty = 3;
 * @return {string}
 */
proto.bc.MinerResponse.prototype.getDifficulty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.bc.MinerResponse.prototype.setDifficulty = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string distance = 4;
 * @return {string}
 */
proto.bc.MinerResponse.prototype.getDistance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.bc.MinerResponse.prototype.setDistance = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint64 timestamp = 5;
 * @return {number}
 */
proto.bc.MinerResponse.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.bc.MinerResponse.prototype.setTimestamp = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint64 iterations = 6;
 * @return {number}
 */
proto.bc.MinerResponse.prototype.getIterations = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.bc.MinerResponse.prototype.setIterations = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional uint64 time_diff = 7;
 * @return {number}
 */
proto.bc.MinerResponse.prototype.getTimeDiff = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.bc.MinerResponse.prototype.setTimeDiff = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * @enum {number}
 */
proto.bc.MinerResponseResult = {
  CANCELED: 0,
  OK: 1,
  ERROR: 2
};

goog.object.extend(exports, proto.bc);
