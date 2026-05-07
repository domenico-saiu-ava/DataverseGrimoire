---
logical: "msdyn_crmconnection"
display: "CRM Connection"
entitySetName: "msdyn_crmconnections"
primaryId: "msdyn_crmconnectionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# CRM Connection

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_crmconnection` |
| Display name | CRM Connection |
| Display (plural) | CRM Connections |
| Schema name | `msdyn_crmconnection` |
| Entity set (Web API) | `msdyn_crmconnections` |
| Primary id attribute | `msdyn_crmconnectionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_crmconnections?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_crmconnections(<guid>)
POST /api/data/v9.2/msdyn_crmconnections
PATCH /api/data/v9.2/msdyn_crmconnections(<guid>)
DELETE /api/data/v9.2/msdyn_crmconnections(<guid>)
```

## Attributes

Writable: **20** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_apimuri`, `msdyn_connectionstate`, `msdyn_connectorid`, `msdyn_connectoruri`, `msdyn_crmconnectionId`, `msdyn_crmtype`, `msdyn_crmurl`, `msdyn_crmuserid`, `msdyn_environmentid`, `msdyn_name`, `msdyn_producttype`, `msdyn_sfenvironmenttype`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_crmconnection` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_crmconnection_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_crmconnection_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_crmconnection_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_crmconnection_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_crmconnection` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_crmconnection` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_crmconnection` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_crmconnection_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_crmconnection_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_crmconnection_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_crmconnection_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_crmconnection_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_crmconnection_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_crmconnection_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_crmconnection_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_crmconnection_msdyn_taggedrecord_connectionid` | _n/a_ | `msdyn_connectionid` | _n/a_ |


## Source

Generated from [msdyn_crmconnection.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_crmconnection.md) on 2026-05-06.