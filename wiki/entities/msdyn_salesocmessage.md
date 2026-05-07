---
logical: "msdyn_salesocmessage"
display: "SalesOmnichannel Message"
entitySetName: "msdyn_salesocmessages"
primaryId: "msdyn_salesocmessageid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# SalesOmnichannel Message

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesocmessage` |
| Display name | SalesOmnichannel Message |
| Display (plural) | SalesOmnichannel Message |
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

Writable: **23** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_channeltype`, `msdyn_clientactivityid`, `msdyn_content`, `msdyn_conversationid`, `msdyn_entityid`, `msdyn_entityname`, `msdyn_from`, `msdyn_isinbound`, `msdyn_messagedetails`, `msdyn_name`, `msdyn_ownerviewstate`, `msdyn_salesocmessageId`, `msdyn_statusdetails`, `msdyn_to`, `msdyn_version`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_salesocmessage` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_salesocmessage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesocmessage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesocmessage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesocmessage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_ocliveworkitem_msdyn_salesocmessage_conversationid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_conversationid` | `msdyn_conversationid` |
| `owner_msdyn_salesocmessage` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_salesocmessage` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_salesocmessage` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesocmessage_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesocmessage_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesocmessage_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_salesocmessage_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_salesocmessage_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesocmessage_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salesocmessage_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesocmessage_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salesocmessage.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salesocmessage.md) on 2026-05-06.