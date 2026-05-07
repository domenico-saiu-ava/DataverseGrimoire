---
logical: "msdyn_orgchartnode"
display: "Entità nodo organigramma Microsoft"
entitySetName: "msdyn_orgchartnodes"
primaryId: "msdyn_orgchartnodeid"
primaryName: "new_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Entità nodo organigramma Microsoft

Solo per uso interno. Entità che archivia i dati di associazione dell'account ai contatti presenti nella gerarchia dell'organigramma dell'account

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_orgchartnode` |
| Display name | Entità nodo organigramma Microsoft |
| Display (plural) | Entità nodo organigramma Microsoft |
| Schema name | `msdyn_orgchartnode` |
| Entity set (Web API) | `msdyn_orgchartnodes` |
| Primary id attribute | `msdyn_orgchartnodeid` |
| Primary name attribute | `new_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_orgchartnodes?$select=new_name&$top=10
GET /api/data/v9.2/msdyn_orgchartnodes(<guid>)
POST /api/data/v9.2/msdyn_orgchartnodes
PATCH /api/data/v9.2/msdyn_orgchartnodes(<guid>)
DELETE /api/data/v9.2/msdyn_orgchartnodes(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_noderecord`, `msdyn_orgchartnodeid`, `msdyn_parentrecord`, `new_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_orgchartnode_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_orgchartnode_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_orgchartnode_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_orgchartnode_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_orgchartnode` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_orgchartnode` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_orgchartnode` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_orgchartnode` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `account_msdyn_orgchartnode_msdyn_parentrecord` | [account](account.md) | `msdyn_parentrecord` | `msdyn_parentrecord` |
| `contact_msdyn_orgchartnode_msdyn_noderecord` | [contact](contact.md) | `msdyn_noderecord` | `msdyn_noderecord` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_orgchartnode_SyncErrors` | [msdyn_orgchartnode](msdyn_orgchartnode.md) | `regardingobjectid` | `regardingobjectid_msdyn_orgchartnode` |
| `msdyn_orgchartnode_DuplicateMatchingRecord` | [msdyn_orgchartnode](msdyn_orgchartnode.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_orgchartnode` |
| `msdyn_orgchartnode_DuplicateBaseRecord` | [msdyn_orgchartnode](msdyn_orgchartnode.md) | `baserecordid` | `baserecordid_msdyn_orgchartnode` |
| `msdyn_orgchartnode_AsyncOperations` | [msdyn_orgchartnode](msdyn_orgchartnode.md) | `regardingobjectid` | `regardingobjectid_msdyn_orgchartnode` |
| `msdyn_orgchartnode_MailboxTrackingFolders` | [msdyn_orgchartnode](msdyn_orgchartnode.md) | `regardingobjectid` | `regardingobjectid_msdyn_orgchartnode` |
| `msdyn_orgchartnode_UserEntityInstanceDatas` | [msdyn_orgchartnode](msdyn_orgchartnode.md) | `objectid` | `objectid_msdyn_orgchartnode` |
| `msdyn_orgchartnode_ProcessSession` | [msdyn_orgchartnode](msdyn_orgchartnode.md) | `regardingobjectid` | `regardingobjectid_msdyn_orgchartnode` |
| `msdyn_orgchartnode_BulkDeleteFailures` | [msdyn_orgchartnode](msdyn_orgchartnode.md) | `regardingobjectid` | `regardingobjectid_msdyn_orgchartnode` |
| `msdyn_orgchartnode_PrincipalObjectAttributeAccesses` | [msdyn_orgchartnode](msdyn_orgchartnode.md) | `objectid` | `objectid_msdyn_orgchartnode` |


## Source

Generated from [msdyn_orgchartnode (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_orgchartnode')) on 2026-05-07.