---
logical: "msdyn_suggestionrequestpayload"
display: "Payload di richiesta suggerimento"
entitySetName: "msdyn_suggestionrequestpayloads"
primaryId: "msdyn_suggestionrequestpayloadid"
primaryName: "msdyn_suggestedentitylogicalname"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Payload di richiesta suggerimento

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_suggestionrequestpayload` |
| Display name | Payload di richiesta suggerimento |
| Display (plural) | Payload di richiesta suggerimento |
| Schema name | `msdyn_suggestionrequestpayload` |
| Entity set (Web API) | `msdyn_suggestionrequestpayloads` |
| Primary id attribute | `msdyn_suggestionrequestpayloadid` |
| Primary name attribute | `msdyn_suggestedentitylogicalname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_suggestionrequestpayloads?$select=msdyn_suggestedentitylogicalname&$top=10
GET /api/data/v9.2/msdyn_suggestionrequestpayloads(<guid>)
POST /api/data/v9.2/msdyn_suggestionrequestpayloads
PATCH /api/data/v9.2/msdyn_suggestionrequestpayloads(<guid>)
DELETE /api/data/v9.2/msdyn_suggestionrequestpayloads(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_requestpayload`, `msdyn_responsepayload`, `msdyn_suggestedentitylogicalname`, `msdyn_suggestionfor`, `msdyn_suggestionrequestpayloadid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_suggestionrequestpayload_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_suggestionrequestpayload_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_suggestionrequestpayload_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_suggestionrequestpayload_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_suggestionrequestpayload` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_incident_msdyn_suggestionrequestpayload` | [incident](incident.md) | `msdyn_suggestionfor` | `msdyn_suggestionfor_incident` |
| `msdyn_msdyn_ocliveworkitem_msdyn_suggestionrequestpayload` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_suggestionfor` | `msdyn_suggestionfor_msdyn_ocliveworkitem` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_suggestionrequestpayload_SyncErrors` | [msdyn_suggestionrequestpayload](msdyn_suggestionrequestpayload.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionrequestpayload` |
| `msdyn_suggestionrequestpayload_AsyncOperations` | [msdyn_suggestionrequestpayload](msdyn_suggestionrequestpayload.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionrequestpayload` |
| `msdyn_suggestionrequestpayload_MailboxTrackingFolders` | [msdyn_suggestionrequestpayload](msdyn_suggestionrequestpayload.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionrequestpayload` |
| `msdyn_suggestionrequestpayload_UserEntityInstanceDatas` | [msdyn_suggestionrequestpayload](msdyn_suggestionrequestpayload.md) | `objectid` | `objectid_msdyn_suggestionrequestpayload` |
| `msdyn_suggestionrequestpayload_ProcessSession` | [msdyn_suggestionrequestpayload](msdyn_suggestionrequestpayload.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionrequestpayload` |
| `msdyn_suggestionrequestpayload_BulkDeleteFailures` | [msdyn_suggestionrequestpayload](msdyn_suggestionrequestpayload.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionrequestpayload` |
| `msdyn_suggestionrequestpayload_PrincipalObjectAttributeAccesses` | [msdyn_suggestionrequestpayload](msdyn_suggestionrequestpayload.md) | `objectid` | `objectid_msdyn_suggestionrequestpayload` |
| `msdyn_msdyn_suggestionrequestpayload_msdyn_suggestioninteraction_SuggestionRequestPayload` | [msdyn_suggestionrequestpayload](msdyn_suggestionrequestpayload.md) | `msdyn_suggestionrequestpayload` | `msdyn_suggestionrequestpayload` |


## Source

Generated from [msdyn_suggestionrequestpayload (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_suggestionrequestpayload')) on 2026-05-07.