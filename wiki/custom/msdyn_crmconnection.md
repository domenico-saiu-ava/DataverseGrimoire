---
logical: "msdyn_crmconnection"
display: "CRM Connection"
entitySetName: "msdyn_crmconnections"
primaryId: "msdyn_crmconnectionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **19** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_apimuri`, `msdyn_connectionstate`, `msdyn_connectorid`, `msdyn_connectoruri`, `msdyn_crmconnectionid`, `msdyn_crmtype`, `msdyn_crmurl`, `msdyn_crmuserid`, `msdyn_environmentid`, `msdyn_name`, `msdyn_producttype`, `msdyn_sfenvironmenttype`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_crmconnection_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_crmconnection_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_crmconnection_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_crmconnection_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_crmconnection` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_crmconnection` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_crmconnection` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_crmconnection` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_crmconnection_SyncErrors` | [msdyn_crmconnection](msdyn_crmconnection.md) | `regardingobjectid` | `regardingobjectid_msdyn_crmconnection` |
| `msdyn_crmconnection_DuplicateMatchingRecord` | [msdyn_crmconnection](msdyn_crmconnection.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_crmconnection` |
| `msdyn_crmconnection_DuplicateBaseRecord` | [msdyn_crmconnection](msdyn_crmconnection.md) | `baserecordid` | `baserecordid_msdyn_crmconnection` |
| `msdyn_crmconnection_AsyncOperations` | [msdyn_crmconnection](msdyn_crmconnection.md) | `regardingobjectid` | `regardingobjectid_msdyn_crmconnection` |
| `msdyn_crmconnection_MailboxTrackingFolders` | [msdyn_crmconnection](msdyn_crmconnection.md) | `regardingobjectid` | `regardingobjectid_msdyn_crmconnection` |
| `msdyn_crmconnection_UserEntityInstanceDatas` | [msdyn_crmconnection](msdyn_crmconnection.md) | `objectid` | `objectid_msdyn_crmconnection` |
| `msdyn_crmconnection_ProcessSession` | [msdyn_crmconnection](msdyn_crmconnection.md) | `regardingobjectid` | `regardingobjectid_msdyn_crmconnection` |
| `msdyn_crmconnection_BulkDeleteFailures` | [msdyn_crmconnection](msdyn_crmconnection.md) | `regardingobjectid` | `regardingobjectid_msdyn_crmconnection` |
| `msdyn_crmconnection_PrincipalObjectAttributeAccesses` | [msdyn_crmconnection](msdyn_crmconnection.md) | `objectid` | `objectid_msdyn_crmconnection` |
| `msdyn_msdyn_crmconnection_msdyn_taggedrecord_connectionid` | [msdyn_crmconnection](msdyn_crmconnection.md) | `msdyn_connectionid` | `msdyn_connectionid` |


## Source

Generated from [msdyn_crmconnection (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_crmconnection')) on 2026-05-07.