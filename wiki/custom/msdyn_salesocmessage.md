---
logical: "msdyn_salesocmessage"
display: "Messaggio SalesOmnichannel"
entitySetName: "msdyn_salesocmessages"
primaryId: "msdyn_salesocmessageid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Messaggio SalesOmnichannel

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesocmessage` |
| Display name | Messaggio SalesOmnichannel |
| Display (plural) | Messaggio SalesOmnichannel |
| Schema name | `msdyn_salesocmessage` |
| Entity set (Web API) | `msdyn_salesocmessages` |
| Primary id attribute | `msdyn_salesocmessageid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesocmessages?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesocmessages(<guid>)
POST /api/data/v9.2/msdyn_salesocmessages
PATCH /api/data/v9.2/msdyn_salesocmessages(<guid>)
DELETE /api/data/v9.2/msdyn_salesocmessages(<guid>)
```

## Attributes

Writable: **22** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_channeltype`, `msdyn_clientactivityid`, `msdyn_content`, `msdyn_conversationid`, `msdyn_entityid`, `msdyn_entityname`, `msdyn_from`, `msdyn_isinbound`, `msdyn_messagedetails`, `msdyn_name`, `msdyn_ownerviewstate`, `msdyn_salesocmessageid`, `msdyn_statusdetails`, `msdyn_to`, `msdyn_version`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salesocmessage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesocmessage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesocmessage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesocmessage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_salesocmessage` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_salesocmessage` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_salesocmessage` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_salesocmessage` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_ocliveworkitem_msdyn_salesocmessage_conversationid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_conversationid` | `msdyn_conversationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesocmessage_SyncErrors` | [msdyn_salesocmessage](msdyn_salesocmessage.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesocmessage` |
| `msdyn_salesocmessage_DuplicateMatchingRecord` | [msdyn_salesocmessage](msdyn_salesocmessage.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_salesocmessage` |
| `msdyn_salesocmessage_DuplicateBaseRecord` | [msdyn_salesocmessage](msdyn_salesocmessage.md) | `baserecordid` | `baserecordid_msdyn_salesocmessage` |
| `msdyn_salesocmessage_AsyncOperations` | [msdyn_salesocmessage](msdyn_salesocmessage.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesocmessage` |
| `msdyn_salesocmessage_MailboxTrackingFolders` | [msdyn_salesocmessage](msdyn_salesocmessage.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesocmessage` |
| `msdyn_salesocmessage_UserEntityInstanceDatas` | [msdyn_salesocmessage](msdyn_salesocmessage.md) | `objectid` | `objectid_msdyn_salesocmessage` |
| `msdyn_salesocmessage_ProcessSession` | [msdyn_salesocmessage](msdyn_salesocmessage.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesocmessage` |
| `msdyn_salesocmessage_BulkDeleteFailures` | [msdyn_salesocmessage](msdyn_salesocmessage.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesocmessage` |
| `msdyn_salesocmessage_PrincipalObjectAttributeAccesses` | [msdyn_salesocmessage](msdyn_salesocmessage.md) | `objectid` | `objectid_msdyn_salesocmessage` |


## Source

Generated from [msdyn_salesocmessage (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salesocmessage')) on 2026-05-07.