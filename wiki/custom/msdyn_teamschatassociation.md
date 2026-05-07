---
logical: "msdyn_teamschatassociation"
display: "Microsoft Teams chat association entity"
entitySetName: "msdyn_teamschatassociations"
primaryId: "msdyn_teamschatassociationid"
primaryName: "msdyn_teamschatassociationname"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Microsoft Teams chat association entity

For internal use only. Entity which stores association data of Dynamics 365 records with Microsoft Teams chat

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_teamschatassociation` |
| Display name | Microsoft Teams chat association entity |
| Display (plural) | Microsoft Teams chat association entities |
| Schema name | `msdyn_teamschatassociation` |
| Entity set (Web API) | `msdyn_teamschatassociations` |
| Primary id attribute | `msdyn_teamschatassociationid` |
| Primary name attribute | `msdyn_teamschatassociationname` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_teamschatassociations?$select=msdyn_teamschatassociationname&$top=10
GET /api/data/v9.2/msdyn_teamschatassociations(<guid>)
POST /api/data/v9.2/msdyn_teamschatassociations
PATCH /api/data/v9.2/msdyn_teamschatassociations(<guid>)
DELETE /api/data/v9.2/msdyn_teamschatassociations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **7**

### Writable

`importsequencenumber`, `msdyn_entityrecordstate`, `msdyn_regardingobjectid`, `msdyn_regardingobjectname`, `msdyn_teamschatassociationid`, `msdyn_teamschatassociationname`, `msdyn_teamschatid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_teamschatassociation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_teamschatassociation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_teamschatassociation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_teamschatassociation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_teamschatassociation_SyncErrors` | [msdyn_teamschatassociation](msdyn_teamschatassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_teamschatassociation` |
| `msdyn_teamschatassociation_AsyncOperations` | [msdyn_teamschatassociation](msdyn_teamschatassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_teamschatassociation` |
| `msdyn_teamschatassociation_MailboxTrackingFolders` | [msdyn_teamschatassociation](msdyn_teamschatassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_teamschatassociation` |
| `msdyn_teamschatassociation_UserEntityInstanceDatas` | [msdyn_teamschatassociation](msdyn_teamschatassociation.md) | `objectid` | `objectid_msdyn_teamschatassociation` |
| `msdyn_teamschatassociation_ProcessSession` | [msdyn_teamschatassociation](msdyn_teamschatassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_teamschatassociation` |
| `msdyn_teamschatassociation_BulkDeleteFailures` | [msdyn_teamschatassociation](msdyn_teamschatassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_teamschatassociation` |
| `msdyn_teamschatassociation_PrincipalObjectAttributeAccesses` | [msdyn_teamschatassociation](msdyn_teamschatassociation.md) | `objectid` | `objectid_msdyn_teamschatassociation` |


## Source

Generated from [msdyn_teamschatassociation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_teamschatassociation')) on 2026-05-07.