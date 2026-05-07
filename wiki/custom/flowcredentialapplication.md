---
logical: "flowcredentialapplication"
display: "Applicazione credenziali flusso"
entitySetName: "flowcredentialapplications"
primaryId: "flowcredentialapplicationid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Applicazione credenziali flusso

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowcredentialapplication` |
| Display name | Applicazione credenziali flusso |
| Display (plural) | Applicazioni credenziali flusso |
| Schema name | `flowcredentialapplication` |
| Entity set (Web API) | `flowcredentialapplications` |
| Primary id attribute | `flowcredentialapplicationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/flowcredentialapplications?$select=name&$top=10
GET /api/data/v9.2/flowcredentialapplications(<guid>)
POST /api/data/v9.2/flowcredentialapplications
PATCH /api/data/v9.2/flowcredentialapplications(<guid>)
DELETE /api/data/v9.2/flowcredentialapplications(<guid>)
```

## Attributes

Writable: **17** · Read-only: **16**

### Writable

`applicationid`, `description`, `flowcredentialapplicationid`, `flowmachinegroupid`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `primarycertificatefile`, `secondarycertificatefile`, `sharingtype`, `statecode`, `statuscode`, `thumbprint`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_flowcredentialapplication_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowcredentialapplication_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowcredentialapplication_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowcredentialapplication_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_flowcredentialapplication` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_flowcredentialapplication` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_flowcredentialapplication` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_flowcredentialapplication` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `flowcredentialapplication_flowmachinegroup` | [flowmachinegroup](flowmachinegroup.md) | `flowmachinegroupid` | `flowmachinegroupid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowcredentialapplication_SyncErrors` | [flowcredentialapplication](flowcredentialapplication.md) | `regardingobjectid` | `regardingobjectid_flowcredentialapplication` |
| `flowcredentialapplication_DuplicateMatchingRecord` | [flowcredentialapplication](flowcredentialapplication.md) | `duplicaterecordid` | `duplicaterecordid_flowcredentialapplication` |
| `flowcredentialapplication_DuplicateBaseRecord` | [flowcredentialapplication](flowcredentialapplication.md) | `baserecordid` | `baserecordid_flowcredentialapplication` |
| `flowcredentialapplication_AsyncOperations` | [flowcredentialapplication](flowcredentialapplication.md) | `regardingobjectid` | `regardingobjectid_flowcredentialapplication` |
| `flowcredentialapplication_MailboxTrackingFolders` | [flowcredentialapplication](flowcredentialapplication.md) | `regardingobjectid` | `regardingobjectid_flowcredentialapplication` |
| `flowcredentialapplication_UserEntityInstanceDatas` | [flowcredentialapplication](flowcredentialapplication.md) | `objectid` | `objectid_flowcredentialapplication` |
| `flowcredentialapplication_ProcessSession` | [flowcredentialapplication](flowcredentialapplication.md) | `regardingobjectid` | `regardingobjectid_flowcredentialapplication` |
| `flowcredentialapplication_BulkDeleteFailures` | [flowcredentialapplication](flowcredentialapplication.md) | `regardingobjectid` | `regardingobjectid_flowcredentialapplication` |
| `flowcredentialapplication_PrincipalObjectAttributeAccesses` | [flowcredentialapplication](flowcredentialapplication.md) | `objectid` | `objectid_flowcredentialapplication` |


## Source

Generated from [flowcredentialapplication (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='flowcredentialapplication')) on 2026-05-07.