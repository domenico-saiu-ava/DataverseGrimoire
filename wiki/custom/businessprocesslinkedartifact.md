---
logical: "businessprocesslinkedartifact"
display: "Business Process Linked Artifact"
entitySetName: "businessprocesslinkedartifacts"
primaryId: "businessprocesslinkedartifactid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Business Process Linked Artifact

## Identity

| Property | Value |
| --- | --- |
| Logical name | `businessprocesslinkedartifact` |
| Display name | Business Process Linked Artifact |
| Display (plural) | Business Process Linked Artifacts |
| Schema name | `BusinessProcessLinkedArtifact` |
| Entity set (Web API) | `businessprocesslinkedartifacts` |
| Primary id attribute | `businessprocesslinkedartifactid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/businessprocesslinkedartifacts?$select=name&$top=10
GET /api/data/v9.2/businessprocesslinkedartifacts(<guid>)
POST /api/data/v9.2/businessprocesslinkedartifacts
PATCH /api/data/v9.2/businessprocesslinkedartifacts(<guid>)
DELETE /api/data/v9.2/businessprocesslinkedartifacts(<guid>)
```

## Attributes

Writable: **15** · Read-only: **16**

### Writable

`artifactid`, `artifacttype`, `businessprocess`, `businessprocesslinkedartifactid`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `planartifact`, `planlink`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `businessprocesslinkedartifact_businessprocess_businessprocess` | [businessprocess](businessprocess.md) | `businessprocess` | `businessprocess` |
| `businessprocesslinkedartifact_planartifact_msdyn_planartifact` | [msdyn_planartifact](msdyn_planartifact.md) | `planartifact` | `planartifact` |
| `businessprocesslinkedartifact_planlink_msdyn_plan` | [msdyn_plan](msdyn_plan.md) | `planlink` | `planlink` |
| `lk_businessprocesslinkedartifact_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_businessprocesslinkedartifact_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_businessprocesslinkedartifact_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_businessprocesslinkedartifact_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_businessprocesslinkedartifact` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_businessprocesslinkedartifact` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_businessprocesslinkedartifact` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_businessprocesslinkedartifact` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `businessprocesslinkedartifact_SyncErrors` | [businessprocesslinkedartifact](businessprocesslinkedartifact.md) | `regardingobjectid` | `regardingobjectid_businessprocesslinkedartifact` |
| `businessprocesslinkedartifact_DuplicateMatchingRecord` | [businessprocesslinkedartifact](businessprocesslinkedartifact.md) | `duplicaterecordid` | `duplicaterecordid_businessprocesslinkedartifact` |
| `businessprocesslinkedartifact_DuplicateBaseRecord` | [businessprocesslinkedartifact](businessprocesslinkedartifact.md) | `baserecordid` | `baserecordid_businessprocesslinkedartifact` |
| `businessprocesslinkedartifact_AsyncOperations` | [businessprocesslinkedartifact](businessprocesslinkedartifact.md) | `regardingobjectid` | `regardingobjectid_businessprocesslinkedartifact` |
| `businessprocesslinkedartifact_MailboxTrackingFolders` | [businessprocesslinkedartifact](businessprocesslinkedartifact.md) | `regardingobjectid` | `regardingobjectid_businessprocesslinkedartifact` |
| `businessprocesslinkedartifact_UserEntityInstanceDatas` | [businessprocesslinkedartifact](businessprocesslinkedartifact.md) | `objectid` | `objectid_businessprocesslinkedartifact` |
| `businessprocesslinkedartifact_ProcessSession` | [businessprocesslinkedartifact](businessprocesslinkedartifact.md) | `regardingobjectid` | `regardingobjectid_businessprocesslinkedartifact` |
| `businessprocesslinkedartifact_BulkDeleteFailures` | [businessprocesslinkedartifact](businessprocesslinkedartifact.md) | `regardingobjectid` | `regardingobjectid_businessprocesslinkedartifact` |
| `businessprocesslinkedartifact_PrincipalObjectAttributeAccesses` | [businessprocesslinkedartifact](businessprocesslinkedartifact.md) | `objectid` | `objectid_businessprocesslinkedartifact` |


## Source

Generated from [businessprocesslinkedartifact (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='businessprocesslinkedartifact')) on 2026-05-07.