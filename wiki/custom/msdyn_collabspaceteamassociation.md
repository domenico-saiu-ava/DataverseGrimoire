---
logical: "msdyn_collabspaceteamassociation"
display: "Collab Space Team Association"
entitySetName: "msdyn_collabspaceteamassociations"
primaryId: "msdyn_collabspaceteamassociationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Collab Space Team Association

Collab Space Team Association

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_collabspaceteamassociation` |
| Display name | Collab Space Team Association |
| Display (plural) | Collab Space Team Associations |
| Schema name | `msdyn_collabspaceteamassociation` |
| Entity set (Web API) | `msdyn_collabspaceteamassociations` |
| Primary id attribute | `msdyn_collabspaceteamassociationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_collabspaceteamassociations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_collabspaceteamassociations(<guid>)
POST /api/data/v9.2/msdyn_collabspaceteamassociations
PATCH /api/data/v9.2/msdyn_collabspaceteamassociations(<guid>)
DELETE /api/data/v9.2/msdyn_collabspaceteamassociations(<guid>)
```

## Attributes

Writable: **16** · Read-only: **7**

### Writable

`importsequencenumber`, `msdyn_collabspaceteamassociationid`, `msdyn_crmrecordid`, `msdyn_crmrecordtype`, `msdyn_crmtype`, `msdyn_data`, `msdyn_dataversion`, `msdyn_name`, `msdyn_producttype`, `msdyn_teamid`, `msdyn_teamweburl`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_collabspaceteamassociation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_collabspaceteamassociation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_collabspaceteamassociation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_collabspaceteamassociation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_collabspaceteamassociation_SyncErrors` | [msdyn_collabspaceteamassociation](msdyn_collabspaceteamassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_collabspaceteamassociation` |
| `msdyn_collabspaceteamassociation_DuplicateMatchingRecord` | [msdyn_collabspaceteamassociation](msdyn_collabspaceteamassociation.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_collabspaceteamassociation` |
| `msdyn_collabspaceteamassociation_DuplicateBaseRecord` | [msdyn_collabspaceteamassociation](msdyn_collabspaceteamassociation.md) | `baserecordid` | `baserecordid_msdyn_collabspaceteamassociation` |
| `msdyn_collabspaceteamassociation_AsyncOperations` | [msdyn_collabspaceteamassociation](msdyn_collabspaceteamassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_collabspaceteamassociation` |
| `msdyn_collabspaceteamassociation_MailboxTrackingFolders` | [msdyn_collabspaceteamassociation](msdyn_collabspaceteamassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_collabspaceteamassociation` |
| `msdyn_collabspaceteamassociation_UserEntityInstanceDatas` | [msdyn_collabspaceteamassociation](msdyn_collabspaceteamassociation.md) | `objectid` | `objectid_msdyn_collabspaceteamassociation` |
| `msdyn_collabspaceteamassociation_ProcessSession` | [msdyn_collabspaceteamassociation](msdyn_collabspaceteamassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_collabspaceteamassociation` |
| `msdyn_collabspaceteamassociation_BulkDeleteFailures` | [msdyn_collabspaceteamassociation](msdyn_collabspaceteamassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_collabspaceteamassociation` |
| `msdyn_collabspaceteamassociation_PrincipalObjectAttributeAccesses` | [msdyn_collabspaceteamassociation](msdyn_collabspaceteamassociation.md) | `objectid` | `objectid_msdyn_collabspaceteamassociation` |


## Source

Generated from [msdyn_collabspaceteamassociation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_collabspaceteamassociation')) on 2026-05-07.