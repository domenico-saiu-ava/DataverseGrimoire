---
logical: "federatedknowledgemetadatarefresh"
display: "FederatedKnowledgeMetadataRefresh"
entitySetName: "federatedknowledgemetadatarefreshset"
primaryId: "federatedknowledgemetadatarefreshid"
primaryName: "searchconfigurationname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# FederatedKnowledgeMetadataRefresh

Registra lo stato del processo MetadataRefresh della Knowledge Base federata

## Identity

| Property | Value |
| --- | --- |
| Logical name | `federatedknowledgemetadatarefresh` |
| Display name | FederatedKnowledgeMetadataRefresh |
| Display (plural) | FederatedKnowledgeMetadataRefreshs |
| Schema name | `FederatedKnowledgeMetadataRefresh` |
| Entity set (Web API) | `federatedknowledgemetadatarefreshset` |
| Primary id attribute | `federatedknowledgemetadatarefreshid` |
| Primary name attribute | `searchconfigurationname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/federatedknowledgemetadatarefreshset?$select=searchconfigurationname&$top=10
GET /api/data/v9.2/federatedknowledgemetadatarefreshset(<guid>)
POST /api/data/v9.2/federatedknowledgemetadatarefreshset
PATCH /api/data/v9.2/federatedknowledgemetadatarefreshset(<guid>)
DELETE /api/data/v9.2/federatedknowledgemetadatarefreshset(<guid>)
```

## Attributes

Writable: **19** · Read-only: **10**

### Writable

`connectorid`, `federatedjobtype`, `federatedknowledgemetadatarefreshid`, `importsequencenumber`, `issuetype`, `jobmessageid`, `lastmetadatarefreshtimestamp`, `lastsuccessfulmetadatarefreshtimestamp`, `metadatarefreshstatus`, `numoffiledatacompleted`, `overriddencreatedon`, `ownerid`, `searchconfigurationid`, `searchconfigurationname`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `totalfiledatacount`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_federatedknowledgemetadatarefresh_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_federatedknowledgemetadatarefresh_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_federatedknowledgemetadatarefresh_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_federatedknowledgemetadatarefresh_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_federatedknowledgemetadatarefresh` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_federatedknowledgemetadatarefresh` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_federatedknowledgemetadatarefresh` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_federatedknowledgemetadatarefresh` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `federatedknowledgemetadatarefresh_SyncErrors` | [federatedknowledgemetadatarefresh](federatedknowledgemetadatarefresh.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgemetadatarefresh` |
| `federatedknowledgemetadatarefresh_DuplicateMatchingRecord` | [federatedknowledgemetadatarefresh](federatedknowledgemetadatarefresh.md) | `duplicaterecordid` | `duplicaterecordid_federatedknowledgemetadatarefresh` |
| `federatedknowledgemetadatarefresh_DuplicateBaseRecord` | [federatedknowledgemetadatarefresh](federatedknowledgemetadatarefresh.md) | `baserecordid` | `baserecordid_federatedknowledgemetadatarefresh` |
| `federatedknowledgemetadatarefresh_AsyncOperations` | [federatedknowledgemetadatarefresh](federatedknowledgemetadatarefresh.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgemetadatarefresh` |
| `federatedknowledgemetadatarefresh_MailboxTrackingFolders` | [federatedknowledgemetadatarefresh](federatedknowledgemetadatarefresh.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgemetadatarefresh` |
| `federatedknowledgemetadatarefresh_UserEntityInstanceDatas` | [federatedknowledgemetadatarefresh](federatedknowledgemetadatarefresh.md) | `objectid` | `objectid_federatedknowledgemetadatarefresh` |
| `federatedknowledgemetadatarefresh_ProcessSession` | [federatedknowledgemetadatarefresh](federatedknowledgemetadatarefresh.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgemetadatarefresh` |
| `federatedknowledgemetadatarefresh_BulkDeleteFailures` | [federatedknowledgemetadatarefresh](federatedknowledgemetadatarefresh.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgemetadatarefresh` |
| `federatedknowledgemetadatarefresh_PrincipalObjectAttributeAccesses` | [federatedknowledgemetadatarefresh](federatedknowledgemetadatarefresh.md) | `objectid` | `objectid_federatedknowledgemetadatarefresh` |


## Source

Generated from [federatedknowledgemetadatarefresh (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='federatedknowledgemetadatarefresh')) on 2026-05-07.